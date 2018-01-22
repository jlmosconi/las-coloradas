import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetUserCart, GetUserCartSuccess } from "../../../actions/user";
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';

@Component({
	selector: 'app-confirm-container',
	template:
		`
			<app-confirm [user]="user$ | async" [cart]="cart$ | async" *ngIf="!(loadingUser$ | async) && (user$ | async)"></app-confirm>
			<div *ngIf="!(user$ | async) && !(loadingUser$ | async)">
				Es necesario estar registrado
			</div>
			<app-module-loader *ngIf="loadingUser$ | async"></app-module-loader>
		`
	,
	styleUrls: ['./confirm.component.scss']
})

export class ConfirmContainerComponent implements OnInit {
	user$: Observable<any>;
	cart$: Observable<any>;
	loadingUser$: Observable<any>;
	constructor(private store: Store<any>) {
		store.dispatch(new GetUserCart({}));
		this.user$ = onStateChangeObservable(store, 'user.userData');
		this.cart$ = onStateChangeObservable(store, 'user.cart');
		this.loadingUser$ = onStateChangeObservable(store, 'user.loadingUser');
	}

	ngOnInit() { }
}