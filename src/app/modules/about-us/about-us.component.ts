import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { GetData, GetDataSuccess} from "../../actions/about";
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../utils/store';

@Component({
	selector: 'app-about-us',
	template:
		`
		<div [swiper]="sliderConfig" class="swiper-container images" *ngIf="!(loading$ | async)">
			<div class="swiper-wrapper">
				<div class="swiper-slide" *ngFor="let image of (data$ | async).images; let i = index;">
					<div [ngStyle]="{'background-image': 'url(' + image + ')'}" class="image h-100"></div>
				</div>
			</div>
		</div>

		<div class="container py-4 py-md-5">
			<h1>Nuestra historia</h1>
			<div class="scroller">
				<div [swiper]="descriptionConfig" class="swiper-container" *ngIf="!(loading$ | async)">
					<div class="swiper-wrapper">
						<div class="swiper-slide" [innerHTML]="(data$ | async).description"></div>
					</div>
					<div [hidden]="descriptionConfig.scrollbar != '.swiper-scrollbar'" class="swiper-scrollbar"></div>
				</div>
			</div>
		</div>
		`
	,
	styleUrls: ['./about-us.component.scss']
})

export class AboutUsContainerComponent implements OnInit {
	sliderConfig: SwiperConfigInterface = {
		autoplay: 5000,
		autoplayDisableOnInteraction: false,
		loop: true,
		centeredSlides: true,
		effect: 'fade'
	};
	descriptionConfig: SwiperConfigInterface = {
		direction: 'vertical',
		slidesPerView: 'auto',
		freeMode: true,
		scrollbar: '.swiper-scrollbar',
		mousewheelControl: true,
		scrollbarHide: false
	}
	data$: Observable<any>;
	loading$: Observable<any>;
	private subscriptionData: ISubscription;
	private subscriptionLoading: ISubscription;
	constructor(private store: Store<any>) {
		store.dispatch(new GetData({}));
		this.data$ = onStateChangeObservable(store, 'about.data');
		this.loading$ = onStateChangeObservable(store, 'about.loading');

		this.subscriptionData = this.data$.subscribe();
		this.subscriptionLoading = this.loading$.subscribe();
	}

	ngOnInit() {
		this.loading$.subscribe(data => {
			console.warn(data);
		})
	 }

	ngOnDestroy() {
		this.subscriptionData.unsubscribe();
		this.subscriptionLoading.unsubscribe();
	}
}