import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { SavePayment, ProcessPaymentData, ProcessCardData } from "../../../actions/checkout";

@Component({
	selector: 'app-payment-container',
	template:
		`
			<app-payment [form]="payData" (savePayment)="savePayment($event)" (onSubmit)="onSubmit($event);" [user]="user$ | async" *ngIf="!(loadingUser$ | async) && (user$ | async)"></app-payment>
			<div *ngIf="!(user$ | async) && !(loadingUser$ | async)">
					Es necesario estar registrado
			</div>
			<app-module-loader *ngIf="loadingUser$ | async"></app-module-loader>
		`
	,
	styleUrls: ['./payment.component.scss']
})

export class PayContainerComponent implements OnInit {
	user$: Observable<any>;
	loadingUser$: Observable<any>;
	payData = this.fb.group({
			// email: ['', [Validators.required, Validators.email]],
			cardNumber: ['4509 9535 6623 3704', [Validators.required, Validators.minLength, Validators.maxLength]],
			cardholderName: ['', [Validators.required]],
			cardExpirationDate: ['03 / 19', [Validators.required]],
			securityCode: ['928', [Validators.required, Validators.minLength, Validators.maxLength]],
			docType: ['', [Validators.required]],
			docNumber: ['', [Validators.required, Validators.minLength, Validators.maxLength, Validators.pattern]],
			paymentMethodId: ['']
	});

	constructor(private store: Store<any>, private fb: FormBuilder) {
		this.user$ = onStateChangeObservable(store, 'user.userData');
		this.loadingUser$ = onStateChangeObservable(store, 'user.loadingUser');
	}

	ngOnInit() { }

	onSubmit(payload) {
		if(payload.type == 'cash') {
			this.store.dispatch(new ProcessPaymentData(payload.data));
		} else if(payload.type == 'card') {
			this.store.dispatch(new ProcessCardData(payload.data));
		}
	}

	savePayment(id) {
		this.store.dispatch(new SavePayment(id));
	}
}