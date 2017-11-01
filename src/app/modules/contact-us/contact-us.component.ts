import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, Validators } from '@angular/forms';
import { SendMessage } from "../../actions/contact";
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../utils/store';

@Component({
	selector: 'app-contact-us',
	template:
		`
		<agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom" [scrollwheel]="scrollwheel">
			<agm-marker
			[latitude]="lat"
			[longitude]="lng"
			>
			<agm-info-window #infoWindow>
				<b>Armería Las Coloradas</b><br>
				Calle 43 Nº433
			</agm-info-window>
			</agm-marker>
		</agm-map>
		<div class="container">
			<div class="py-md-5 py-4">
				<h1 class="text-center text-md-left">Envianos un mensaje</h1>
				<div class="row">
					<div class="col-md-6">
						<p class="description text-center text-md-left">
							Si tiene alguna sugerencia o consulta, complete el siguente formulario y responderemos a la brevedad.
						</p>
						<form novalidate [formGroup]="contact" (ngSubmit)="submit();">
							<mat-form-field class="w-100">
								<input matInput placeholder="Nombre" type="text" formControlName="name" required>
								<span matSuffix> <mat-icon>person_outline</mat-icon> </span>
								<mat-error *ngIf="contact.controls.name.invalid">{{getEmailErrorMessage()}}</mat-error>
							</mat-form-field>

							<mat-form-field class="w-100">
								<input matInput placeholder="Email" type="email" formControlName="email" required>
								<span matSuffix> <mat-icon>mail_outline</mat-icon> </span>
								<mat-error *ngIf="contact.controls.email.invalid">{{getEmailErrorMessage()}}</mat-error>
							</mat-form-field>

							<mat-form-field class="w-100">
								<input matInput placeholder="Teléfono" type="tel" formControlName="phone">
								<span matSuffix> <mat-icon>phone</mat-icon> </span>
							</mat-form-field>

							<mat-form-field class="w-100">
								<textarea matInput placeholder="Mensaje" formControlName="message" required></textarea>
								<mat-error *ngIf="contact.controls.message.invalid">{{getMessageErrorMessage()}}</mat-error>
							</mat-form-field>
							
							<div class="text-center text-md-left">
								<button type="submit" class="mt-2 mb-3 mb-md-0" mat-raised-button color="primary" [disabled]="contact.invalid || (loading$ | async)">
									Enviar
								</button>
							</div>
						</form>
					</div>
					<div class="col-md-4 offset-md-2">
						<div class="info pb-2 mx-auto mt-3 mt-md-0">
							<div class="icon">
								<mat-icon>pin_drop</mat-icon>
							</div>
							<div class="o-hidden">
								<h4 class="info-title">Encontranos en nuestro local</h4>
								<p class="description">Calle 43 entre 3 Y 4 N°433<br>
									La Plata<br>
									Buenos Aires‎
								</p>
							</div>
						</div>
						<div class="info pb-2">
							<div class="icon">
								<mat-icon>phone</mat-icon>
							</div>
							<div class="o-hidden">
								<h4 class="info-title">Comunicate con nosotros</h4>
								<p class="description">
									0810 2229873<br>
									0221 482-2340<br>
								</p>
							</div>
						</div>
						<div class="info pb-2">
							<div class="icon">
								<mat-icon>business_center</mat-icon>
							</div>
							<div class="o-hidden">
								<h4 class="info-title">Información legal</h4>
								<p class="description"> Las Coloradas<br>
									información legal<br>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`
	,
	styleUrls: ['./contact-us.component.scss']
})

export class ContactUsContainerComponent implements OnInit {
	lat: number = -34.906585;
	lng: number = -57.9530369;
	zoom: number = 18;
	scrollwheel: boolean = false;
	contact = this.fb.group({
		name: ['', [Validators.required]],
		email: ['', [Validators.required, Validators.email]],
		phone: [''],
		message: ['', [Validators.required]]
	});
	loading$: Observable<any>;
	sendSuccess$: Observable<any>;
	private subscriptionLoading: ISubscription;
	private subscriptionSendSuccess: ISubscription;

	constructor(private store: Store<any>, private fb: FormBuilder) {
		this.loading$ = onStateChangeObservable(store, 'contact.loading');
		this.sendSuccess$ = onStateChangeObservable(store, 'contact.sendSuccess');

		this.subscriptionLoading = this.loading$.subscribe();
		this.subscriptionSendSuccess = this.sendSuccess$.subscribe(success => {
			if(success) this.contact.reset();
		})
	 }

	ngOnInit() { }

	submit() {
		this.store.dispatch(new SendMessage(this.contact.value));
	}

	ngOnDestroy() {
		this.subscriptionLoading.unsubscribe();
		this.subscriptionSendSuccess.unsubscribe();
	}

	getNameErrorMessage() {
		let name = this.contact.controls.name;
    	return name.hasError('required') ? 'Campo requerido' : '';
	}

	getEmailErrorMessage() {
		let email = this.contact.controls.email;
    	return email.hasError('required') ? 'Campo requerido' :
			email.hasError('email') ? 'No es un correo electrónico válido' :
		'';
	}

	getMessageErrorMessage() {
		let message = this.contact.controls.message;
    	return message.hasError('required') ? 'Campo requerido' :
			message.hasError('email') ? 'No es un correo electrónico válido' :
		'';
	}
}