import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { SaveShipping, GetShipping } from "../../../actions/checkout";

@Component({
	selector: 'app-shipping-container',
	template: 
		`
			<app-shipping (saveShipping)="saveShipping($event)" [shipping]="shipping$ | async" [userCheckout]="user$ | async" *ngIf="!(loadingUser$ | async)"></app-shipping>
			<app-module-loader  *ngIf="loadingUser$ | async"></app-module-loader>
		`
	,
	styleUrls: ['./shipping.component.scss']
})

export class ShippingContainerComponent implements OnInit {
	user$: Observable<any>;
	loadingUser$: Observable<any>;
	constructor(private store: Store<any>) {
		store.dispatch(new GetShipping());

		this.user$ = onStateChangeObservable(store, 'user.userData.checkout');
		this.loadingUser$ = onStateChangeObservable(store, 'user.loadingUser');
	 }

	ngOnInit() { }

	saveShipping(id) {
		this.store.dispatch(new SaveShipping(id));
	}
}