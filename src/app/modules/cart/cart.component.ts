import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetUserCart, GetUserCartSuccess, GetUser } from "../../actions/user";
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../utils/store';
import { LocalStorageService } from "../../services/localStorage/service";

@Component({
	selector: 'app-cart-container',
	template:
		`
			<div class="container">
				<app-cart [cart]="cart$ | async" *ngIf="!(loadingCart$ | async)"></app-cart>
				<app-module-loader  *ngIf="loadingCart$ | async"></app-module-loader>
			</div>
		`,
	styleUrls: ['./cart.component.scss']
})

export class CartContainerComponent implements OnInit {
	cart$: Observable<any>;
	cart;
	user$: Observable<any>;
	loadingCart$: Observable<any>;
	private subscriptionCart: Subscription;
	private subscriptionLoadingCart: Subscription;
	constructor(private store: Store<any>, private localStorageService: LocalStorageService) {
		store.dispatch(new GetUser({}));
		this.cart$ = onStateChangeObservable(store, 'user.cart');
		this.loadingCart$ = onStateChangeObservable(store, 'user.loadingCart');
		this.subscriptionCart = this.cart$.subscribe(cart => console.warn(cart));
		this.subscriptionLoadingCart = this.loadingCart$.subscribe();
	}

	ngOnInit() { }

	ngOnDestroy() {
		this.subscriptionCart.unsubscribe();
		this.subscriptionLoadingCart.unsubscribe();
		this.store.dispatch(new GetUserCartSuccess([]));
	}
}