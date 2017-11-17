import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from "rxjs/Subscription";
import { GetDetail, GetDetailSuccess, GetRelated } from "../../actions/products";
import { onStateChangeObservable } from '../../utils/store';

@Component({
	selector: 'app-product',
	template: 
	`
		<div class="container">
			<div class="pt-3 pt-md-4">
				<app-product-detail [product]="product$ | async" [favorites]="userFavorites$ | async" [related]="related$ | async" *ngIf="!(loading$ | async) && (product$ | async).id"></app-product-detail>
				<app-no-results-found *ngIf="!(loading$ | async) && !(product$ | async).id"></app-no-results-found>
				<app-module-loader *ngIf="loading$ | async"></app-module-loader>
			</div>
		</div>
	`
	,
	styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
	product$: Observable<any>;
	related$: Observable<any>;
	loading$: Observable<any>;
	userFavorites$: Observable<any>;
	id;
	private subscriptionProduct: ISubscription;
	private subscriptionRelated: ISubscription;
	private subscriptionLoading: ISubscription;
	private subscriptionuserFavorites: ISubscription;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private store: Store<any>,
	) { 
		this.activatedRoute.paramMap.subscribe((data:any) => {
			this.store.dispatch(new GetDetailSuccess({}));

			this.id = data.params.id;
			this.store.dispatch(new GetDetail(this.id));
			this.product$ = onStateChangeObservable(this.store, 'products.selectedProduct');
			this.related$ = onStateChangeObservable(this.store, 'products.related');
			this.loading$ = onStateChangeObservable(this.store, 'products.selectedProductLoading');
			this.userFavorites$ = onStateChangeObservable(store, 'user.userData.favorites');

			this.subscriptionProduct = this.product$.subscribe(product => {
				if(product.id && product.categories) {
					this.store.dispatch(new GetRelated({
						categoryId: Object.keys(product.categories)[0],
						productId: product.id
					}));
				}
			});
			this.subscriptionRelated = this.related$.subscribe();
			this.subscriptionLoading = this.loading$.subscribe();
			this.subscriptionuserFavorites = this.userFavorites$.subscribe();
		});
	}

	ngOnInit() { }

	 ngOnDestroy() {
		this.subscriptionProduct.unsubscribe();
		this.subscriptionRelated.unsubscribe();
		this.subscriptionLoading.unsubscribe();
		this.subscriptionuserFavorites.unsubscribe();
	}
}