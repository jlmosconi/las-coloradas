import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
declare var Card: any;

@Component({
	selector: 'app-payment',
	template:
		`
		<div *ngIf="user">
			<div class="row">
				<div class="col-md-8 offset-md-2">
					<div class="row">
						<div class="col-sm-4" *ngFor="let payment of payments">
							<div class="choice pb-3" data-toggle="wizard-checkbox" [ngClass]="{'active': user.checkout.payment === payment.id }" (click)="select(payment.id)">
								<div class="card card-checkboxes card-hover-effect">
									<i class="ti-home material-icons">{{ payment.icon }}</i>
									<p>{{ payment.title }}</p>
								</div>
							</div>
						</div>

						<div class="info w-100 mt-3 mt-md-5">
							<div class="col-12">
								<div class="card p-3" *ngIf="user.checkout.payment === 1">
									<div>
										<div class="d-flex mb-2"> <div class="material-icons mr-3">pin_drop</div> Calle 43 entre 3 Y 4 N°433 La Plata, Buenos Aires</div>
										<div class="d-flex"> <div class="material-icons mr-3">watch_later</div> Lunes - Viernes: 9:00 a 12:00, Sabados: 9:00 a 13:00</div>
									</div>
								</div>

								<div [hidden]="user.checkout.payment != 2">
									<div class="card-wrapper"></div>
									<div class="form-container active pt-5">
										<form novalidate [formGroup]="form" (ngSubmit)="submit();">
											<!--<mat-form-field class="w-100">
												<input type="email" matInput placeholder="Email" formControlName="email">
												<mat-error *ngIf="form.controls.email.invalid">err</mat-error>
											</mat-form-field>-->
											<mat-form-field class="w-100">
												<input type="text" name="number" id="cardNumber" data-checkout="cardNumber" matInput placeholder="Número de tarjeta" formControlName="cardNumber" minlength="19" maxlength="19" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete="off">
												<mat-error *ngIf="form.controls.cardNumber.invalid">
													<div *ngIf="form.controls.cardNumber.errors.required">Campo requerido</div>
												</mat-error>
											</mat-form-field>
											<mat-form-field class="w-100">
												<input type="text" name="name" id="cardholderName" data-checkout="cardholderName" matInput placeholder="Nombre y apellido impreso en la tarjeta" formControlName="cardholderName" autocomplete="off">
												<mat-error *ngIf="form.controls.cardholderName.invalid">
													<div *ngIf="form.controls.cardholderName.errors.required">Campo requerido</div>
												</mat-error>
											</mat-form-field>
											<mat-form-field class="w-100">
												<input type="text" name="expiry" id="cardExpirationDate" data-checkout="cardExpirationDate" matInput placeholder="Válida hasta" formControlName="cardExpirationDate" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete="off">
												<mat-error *ngIf="form.controls.cardExpirationDate.invalid">
													<div *ngIf="form.controls.cardExpirationDate.errors.required">Campo requerido</div>
												</mat-error>
											</mat-form-field>
											<mat-form-field class="w-100">
												<input type="text" name="cvc" id="securityCode" data-checkout="securityCode" matInput placeholder="Código de seguridad" formControlName="securityCode" minlength="3" maxlength="4" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete="off">
												<mat-error *ngIf="form.controls.securityCode.invalid">
													<div *ngIf="form.controls.securityCode.errors.required">Campo requerido</div>
													<div *ngIf="form.controls.securityCode.errors.minlength || form.controls.securityCode.errors.maxlength">Fecha erronea</div>
												</mat-error>
											</mat-form-field>
											<mat-form-field>
												<mat-select placeholder="Tipo de documento" formControlName="docType">
													<mat-option *ngFor="let docType of docTypes" [value]="docType.value"> {{ docType.label }}</mat-option>
												</mat-select>
												<mat-error *ngIf="form.controls.docType.invalid">
													<div *ngIf="form.controls.docType.errors.required">Campo requerido</div>
												</mat-error>
											</mat-form-field>
											<mat-form-field class="w-100">
												<input type="text" id="docNumber" data-checkout="docNumber" matInput placeholder="Documento del titular de esta tarjeta (Sólo números)" formControlName="docNumber" minlength="7" maxlength="9" pattern="^(0|[1-9][0-9]*)$">
												<mat-error *ngIf="form.controls.docNumber.invalid">
													<div *ngIf="form.controls.docNumber.errors.required">Campo requerido</div>
													<div *ngIf="form.controls.docNumber.errors.minlength || form.controls.docNumber.errors.maxlength">Debe introducir entre {{ form.controls.docNumber.errors.minlength.requiredLength }} y 9 dígitos</div>
													<div *ngIf="form.controls.docNumber.errors.pattern">Error de formato</div>
												</mat-error>
											</mat-form-field>

											<div class="text-center">
												<button mat-raised-button color="primary" type="submit" [disabled]="form.invalid || loadingCard">Confirmar tarjeta</button>
											</div>
										</form>
									</div>
								</div>

								<div *ngIf="user.checkout.payment === 3">
									<div class="row">
										<div class="col-md-3 col-sm-4 text-center" [ngClass]="{'offset-md-3 offset-sm-2': i == 0}" *ngFor="let cashType of cashTypes; let i = index">
											<div class="h-100 choice sub-choise pb-3" (click)="cash(cashType.id)" [ngClass]="{'active': user.checkout?.payment_data?.payment_method_id === cashType.id }">
												<div class="d-flex align-items-center justify-content-center card card-checkboxes card-hover-effect h-100">
													<img [src]="cashType.img">
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`
	,
	styleUrls: ['./payment.component.scss']
})

export class PaymentComponent implements OnInit {
	@Input() user;
	@Input() form;
	@Input() loadingCard: boolean;
	@Output() savePayment: EventEmitter<any> = new EventEmitter();
	@Output() onSubmit: EventEmitter<any> = new EventEmitter();
	payments = [
		{
			id: 1,
			title: 'Acuerdo con el vendedor',
			icon: 'domain'
		},
		{
			id: 2,
			title: 'Credito o débito',
			icon: 'payment'
		},
		{
			id: 3,
			title: 'Efectivo',
			icon: 'thumb_up'
		}
	];

	cashTypes = [
		{
			id: 'rapipago',
			img: 'http://res.cloudinary.com/anterux/image/upload/v1513952276/rapipago_logo.svg'
		},
		{
			id: 'pagofacil',
			img: 'https://res.cloudinary.com/anterux/image/upload/v1513952276/pagofacil_logo.svg'
		}

	]

	docTypes = [
		{
			value: 'DNI',
			label: 'DNI'
		},
		{
			value: 'CUIT',
			label: 'CUIT'
		},
	];
	constructor() { 
		
	}

	ngOnInit() { }

	ngAfterViewInit() {
		this.generateCard();
	}

	generateCard() {
		var card = new Card({
			form: '.active form',
			container: '.card-wrapper',
		
			formSelectors: {
				numberInput: 'input[name="number"]', // optional — default input[name="number"]
				expiryInput: 'input[name="expiry"]', // optional — default input[name="expiry"]
				cvcInput: 'input[name="cvc"]', // optional — default input[name="cvc"]
				nameInput: 'input[name="name"]' // optional - defaults input[name="name"]
			},

			formatting: true,
			width: 375,

			messages: {
				validDate: 'Válida\nhasta', // optional - default 'valid\nthru'
				monthYear: 'mes/año', // optional - default 'month/year'
			},

			// Default placeholders for rendered fields - optional
			placeholders: {
				number: '•••• •••• •••• ••••',
				name: 'Nombre Apellido',
				expiry: '••/••',
				cvc: '•••'
			},
		});
	}

	submit() {
		this.onSubmit.emit({
			type: 'card',
			data: this.form.value
		});
	}

	cash(method) {
		this.onSubmit.emit({
			type: 'cash',
			data: method
		});
	}

	select(id){
		this.savePayment.emit(id);
		if(id === 2) this.generateCard();
	}
}