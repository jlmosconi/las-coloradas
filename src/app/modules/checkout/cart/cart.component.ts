import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetUserCart, GetUserCartSuccess, GetUser } from "../../../actions/user";
import { RemoveToCart, SetStock } from "../../../actions/products";
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { LocalStorageService } from "../../../services/localStorage/service";

@Component({
	selector: 'app-cart-container',
	template:
		`
			<app-cart [cart]="cart$ | async" *ngIf="!(loadingCart$ | async)" (deleteProduct)="deleteProduct($event);" (setStock)="setStock($event)"></app-cart>
			<app-module-loader  *ngIf="loadingCart$ | async"></app-module-loader>
		`,
	styleUrls: ['./cart.component.scss']
})

export class CartContainerComponent implements OnInit {
	cart$: Observable<any>;
	removeToCart$: Observable<any>;
	loadingCart$: Observable<any>;
	private subscriptionCart: Subscription;
	private subscriptionLoadingCart: Subscription;
	constructor(private store: Store<any>, private localStorageService: LocalStorageService) {
		store.dispatch(new GetUserCart({}));
		this.cart$ = onStateChangeObservable(store, 'user.cart');
		this.loadingCart$ = onStateChangeObservable(store, 'user.loadingCart');

		this.subscriptionCart = this.cart$.subscribe();
		this.subscriptionLoadingCart = this.loadingCart$.subscribe();
	}

	ngOnInit() { }

	deleteProduct(productId) {
		this.store.dispatch(new RemoveToCart(productId));
	}

	setStock(product) {
		this.store.dispatch(new SetStock({
			productId: product.productId, 
			quantity: product.quantity
		}));
	}

	ngOnDestroy() {
		this.subscriptionCart.unsubscribe();
		this.subscriptionLoadingCart.unsubscribe();
		this.store.dispatch(new GetUserCartSuccess([]));
	}
}