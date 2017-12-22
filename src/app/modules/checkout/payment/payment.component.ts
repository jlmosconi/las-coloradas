import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { SavePayment } from "../../../actions/checkout";

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
			email: ['', [Validators.required, Validators.email]],
			cardNumber: ['4509 9535 6623 3704', [Validators.required, Validators.minLength, Validators.maxLength]],
			securityCode: ['928', [Validators.required, Validators.minLength, Validators.maxLength]],
			cardExpirationDate: ['03 / 19', [Validators.required]],
			cardholderName: ['JOSE LUIS MOSCONI', [Validators.required]],
			docType: ['DNI', [Validators.required]],
			docNumber: ['36272545', [Validators.required, Validators.minLength, Validators.maxLength, Validators.pattern]],
			paymentMethodId: ['']
	});

	constructor(private store: Store<any>, private fb: FormBuilder) {
		this.user$ = onStateChangeObservable(store, 'user.userData');
		this.loadingUser$ = onStateChangeObservable(store, 'user.loadingUser');
	}

	ngOnInit() { }

	onSubmit(token) {
		console.warn(token);
	}

	savePayment(id) {
		this.store.dispatch(new SavePayment(id));
	}
}