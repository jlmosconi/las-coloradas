import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { SaveShipping } from "../../../actions/checkout";

@Component({
	selector: 'app-shipping-container',
	template: 
		`
			<app-shipping (saveShipping)="saveShipping($event)" [userCheckout]="user$ | async" *ngIf="!(loadingUser$ | async) && (user$ | async)"></app-shipping>
			<div *ngIf="!(user$ | async) && !(loadingUser$ | async)">
					Es necesario estar registrado
			</div>
			<app-module-loader *ngIf="loadingUser$ | async"></app-module-loader>
		`
	,
	styleUrls: ['./shipping.component.scss']
})

export class ShippingContainerComponent implements OnInit {
	user$: Observable<any>;
	loadingUser$: Observable<any>;
	constructor(private store: Store<any>) {
		this.user$ = onStateChangeObservable(store, 'user.userData.checkout');
		this.loadingUser$ = onStateChangeObservable(store, 'user.loadingUser');
	}

	ngOnInit() { }

	saveShipping(shipment) {
		this.store.dispatch(new SaveShipping(shipment));
	}
}