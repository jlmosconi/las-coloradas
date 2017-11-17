import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from "rxjs/Subscription";
import { onStateChangeObservable } from '../../utils/store';
import { SearchProducts, ClearSearchList } from "../../actions/products";

@Component({
	selector: 'app-search-container',
	template: 
		`
		<div class="container">
			<div class="pt-3 pt-md-4">
				<app-search
					[products]="products$ | async" 
					[currentPage]="currentPage$ | async"
					[totalPages]="totalPages$ | async"
					[title]="query"
					[favorites]="userFavorites$ | async"
					[loading]="loading$ | async"
					(onScroll)="onScroll()"
					>
				</app-search>
			</div>
		</div>
		`,
	styleUrls: ['./search.component.scss']
})

export class SearchContainerComponent implements OnInit {
	products$: Observable<any>;
	currentPage$: Observable<any>;
	totalPages$: Observable<any>;
	loading$: Observable<any>;
	userFavorites$: Observable<any>;
	query;
	page = 0;
	private productsSubscription: ISubscription;
	private currentPageSubscription: ISubscription;
	private totalPagesSubscription: ISubscription;
	private loadingSubscription: ISubscription;
	private subscriptionuserFavorites: ISubscription;
	constructor(
		private activatedRoute: ActivatedRoute,
		private store: Store<any>
	) { 
		this.activatedRoute.paramMap.subscribe((data:any) => {
			store.dispatch(new ClearSearchList());
			this.page = 0;

			this.query = (this.activatedRoute.snapshot.params.q).split('-').join(' ');
			this.store.dispatch(new SearchProducts({
				query: this.query,
				page: this.page
			}));
		});

		this.products$ = onStateChangeObservable(store, 'products.searchList');
		this.loading$ = onStateChangeObservable(store, 'products.loading');
		this.currentPage$ = onStateChangeObservable(store, 'products.currentPage');
		this.totalPages$ = onStateChangeObservable(store, 'products.totalPages');
		this.userFavorites$ = onStateChangeObservable(store, 'user.userData.favorites');

		this.productsSubscription = this.products$.subscribe();
		this.currentPageSubscription = this.currentPage$.subscribe();
		this.totalPagesSubscription = this.totalPages$.subscribe();
		this.loadingSubscription = this.loading$.subscribe();
		this.subscriptionuserFavorites = this.userFavorites$.subscribe();
	}

	ngOnInit() { }

	onScroll() {
		this.page ++;
		this.store.dispatch(new SearchProducts({
			query: this.query,
			page: this.page
		}));
	}

	ngOnDestroy() {
		this.productsSubscription.unsubscribe();
		this.currentPageSubscription.unsubscribe();
		this.totalPagesSubscription.unsubscribe();
		this.loadingSubscription.unsubscribe();
		this.subscriptionuserFavorites.unsubscribe();

		this.store.dispatch(new ClearSearchList());
	}
}