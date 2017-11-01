import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetHighlights, GetLatest, GetLatestSuccess, GetHighlightsSuccess } from "../../actions/products";
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../utils/store';

@Component({
	selector: 'app-landing',
	template: `
	<section class="jumbotron mb-4 mb-md-5">
		<div class="container d-flex align-items-center">
			<div class="info text-center text-sm-left">
				<h1 class="jumbotron-heading">Armería <span>Las Coloradas</span></h1>
				<p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum varius ex. Morbi at orci diam. Cras interdum maximus turpis consectetur lobortis.</p>
				<!--<p>
					<a href="#" class="btn btn-primary">Main call to action</a>
					<a href="#" class="btn btn-secondary">Secondary action</a>
				</p>-->
			</div>
		</div>
	</section>

	<div class="container">
		<div class="pb-4 pb-md-5">
			<app-product-carousel [title]="'Destacados'" [products]="highlights$ | async"></app-product-carousel>
		</div>

		<div class="boxes pb-3 pb-md-5">
		<div class="row">
			<div class="col-md-4">
				<div class="box mb-3 mb-md-0 p-3 d-flex align-items-center justify-content-start mat-elevation-z3">
					<div class="mr-4 d-block d-md-none d-xl-block">
						<mat-icon>local_shipping</mat-icon>
					</div>
					<div>
						<div class="desc">
							<h1>Envíos</h1>
							<h2>Asegurados</h2>
							<p>A todo el país</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="box mb-3 mb-md-0 p-3 d-flex align-items-center justify-content-start mat-elevation-z3">
					<div class="mr-4 d-block d-md-none d-xl-block">
						<mat-icon>payment</mat-icon>
					</div>
					<div>
						<div class="desc">
							<h1>Pagos</h1>
							<h2>Protegidos</h2>
							<p>Débito y crédito</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="box p-3 d-flex align-items-center justify-content-start mat-elevation-z3">
					<div class="mr-4 d-block d-md-none d-xl-block">
						<mat-icon>phone</mat-icon>
					</div>
					<div>
						<div class="desc">
							<h1>Atención</h1>
							<h2>Personalizada</h2>
							<p>0810 2229873</p>
						</div>
					</div>
				</div>
			</div>
				
		</div>
	</div>

		<div class="pb-4 pb-md-5">
			<app-product-carousel [title]="'Agregados recientemente'" [products]="latest$ | async"></app-product-carousel>
		</div>

		<app-brands-list></app-brands-list>
	</div>
	`,
	styleUrls: ['./landing.component.scss']
})

export class LandingContainerComponent implements OnInit {
	latest$: Observable<any>;
	highlights$: Observable<any>;
	private subscriptionLatest: ISubscription;
	private subscriptionHighlights: ISubscription;
	constructor(private store: Store<any>) {
		store.dispatch(new GetLatest({}));
		store.dispatch(new GetHighlights({}));
		this.latest$ = onStateChangeObservable(store, 'products.latest');
		this.highlights$ = onStateChangeObservable(store, 'products.highlights');

		this.subscriptionLatest = this.latest$.subscribe();
		this.subscriptionHighlights = this.highlights$.subscribe();
	}

	ngOnInit() {}

	ngOnDestroy() {
		this.subscriptionLatest.unsubscribe();
		this.subscriptionHighlights.unsubscribe();
		this.store.dispatch(new GetLatestSuccess([]));
		this.store.dispatch(new GetHighlightsSuccess([]));
	}
}