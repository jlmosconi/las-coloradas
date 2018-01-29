import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-confirm',
	template: 
		`
			<div *ngIf="!cart">
				Carrito vacío
			</div>
			<div class="table-responsive" *ngIf="cart">
				<table class="table table-shopping w-100">
					<thead>
						<tr>
							<th class="text-center"></th>
							<th>Producto</th>
							<th class="text-right">Precio</th>
							<th class="text-right">Cantidad</th>
							<th class="text-right">Total</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr *ngFor="let product of cart; let i = index" [ngClass]="product.state">
							<td>
								<div class="img-container">
									<img [src]="product.photoUrl" [alt]="product.title">
								</div>
							</td>
							<td class="td-name">
								<a [routerLink]="['/producto', product.id, product.slug]">{{ product.title }}</a>
							</td>
							<td class="td-number">
								<small>$</small> {{ product.price }}
							</td>
							<td class="td-number">
								{{ product.quantity }}
							</td>
							<td class="td-number">
								<small>$</small>{{ product.total }}
							</td>
						</tr>
						<tr>
							<td colspan="3"></td>
							<td class="td-total">
								Total
							</td>
							<td class="td-price">
								<small>$</small>{{ total }}
							</td>
							<td colspan="1"></td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="row py-3">
				<div class="col-sm-4">
					<div class="choice pb-3 active" *ngIf="shipping" [routerLink]="['/checkout/envio']">
						<div class="card card-checkboxes">
							<p class="title">Tipo de envío</p>
							<i class="material-icons">{{ shipping.icon }}</i>
							<p>{{ shipping.title }}</p>
						</div>
					</div>
					<div *ngIf="!shipping">
						No se eligió un método de Envío.
					</div>
				</div>

				<div class="col-sm-4">
					<div class="choice pb-3 active" *ngIf="payment" [routerLink]="['/checkout/pago']">
						<div class="card card-checkboxes">
							<p class="title">Tipo de pago</p>
							<i class="material-icons">{{ payment.icon }}</i>
							<p>{{ payment.title }}</p>
						</div>
					</div>

					<div *ngIf="!payment">
						No se eligió un tipo de Pago.
					</div>
				</div>

				<div class="col-sm-4">
					<div class="choice pb-3 active" *ngIf="payment && user.checkout && user.checkout.payment_data" [routerLink]="['/checkout/pago']">
						<div class="card card-checkboxes">
							<p class="title">Método de pago</p>
							<img [src]="paymentMethod.icon" width="70">
							<p>{{ paymentMethod.title }} <span *ngIf="user.checkout && user.checkout.payment_data && user.checkout.payment_data.last_four_digits">{{ user.checkout.payment_data.last_four_digits }}</span></p>
						</div>
					</div>

					<div *ngIf="!payment || !user.checkout || !user.checkout.payment_data">
						No se eligió un método de Pago.
					</div>
				</div>
			</div>

			<h1 class="text-center">
				<small>$</small>{{ total }}
			</h1>

			<div class="text-center">
				<div class="text-danger" *ngIf="user.checkout.status">
					<div *ngIf="!user.checkout.status.seccess">
						Error!
					</div>
				</div>
				<button mat-raised-button color="primary" type="submit" (click)="confirm();" [disabled]="!cart || !user.checkout.shipping || !user.checkout.payment || loadingPayment">
					<span *ngIf="!loadingPayment">Confirmar compra</span>
					<mat-spinner *ngIf="loadingPayment"></mat-spinner>
				</button>
			</div>

		`
	,
	styleUrls: ['./confirm.component.scss']
})

export class ConfirmComponent implements OnInit {
	@Input() user;
	@Input() cart;
	@Input() loadingPayment: boolean;
	@Output() confirmPayment: EventEmitter<any> = new EventEmitter();
	total: number = 0;
	shipping;
	payment;
	paymentMethod;
	shippings = [
		{
			id: 1,
			title: 'Acuerdo con el vendedor',
			icon: 'domain'
		},
		{
			id: 2,
			title: 'Retiro en una sucursal',
			icon: 'local_shipping'
		},
		{
			id: 3,
			title: 'Normal a domicilio',
			icon: 'home'
		}
	];
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
	paymentMethods = [
		{
			id: 'visa',
			title: 'Terminada en',
			icon: 'https://res.cloudinary.com/anterux/image/upload/c_pad,h_133,w_133/v1516662966/Visa_logo_hxbjvh.png'
		},
		{
			id: 'amex',
			title: 'Terminada en',
			icon: 'http://res.cloudinary.com/anterux/image/upload/c_pad,h_133,w_133/v1516662966/Amex_logo_c1dcfh.png'
		},
		{
			id: 'master',
			title: 'Terminada en',
			icon: 'https://res.cloudinary.com/anterux/image/upload/c_pad,h_133,w_133/v1516662966/Mastercard_logo_szkbqg.png'
		},
		{
			id: 'rapipago',
			title: 'Rapipago',
			icon: 'https://res.cloudinary.com/anterux/image/upload/v1513952276/rapipago_logo.svg'
		},
		{
			id: 'pagofacil',
			title: 'Pago Fácil',
			icon: 'https://res.cloudinary.com/anterux/image/upload/v1513952276/pagofacil_logo.svg'
		}
	]
	constructor() { }

	ngOnInit() { 
		this.findShipping();
		this.findPaymentType();
		this.findPaymentMethod();
	}

	findShipping() {
		this.user.checkout && this.user.checkout.shipping ? this.shipping = this.shippings.find(obj => { return obj.id === this.user.checkout.shipping; }) : null;
	}

	findPaymentType() {
		this.user.checkout && this.user.checkout.payment ? this.payment = this.payments.find(obj => { return obj.id === this.user.checkout.payment; }) : null;
	}

	findPaymentMethod() {
		this.user.checkout && this.user.checkout.payment_data ? this.paymentMethod = this.paymentMethods.find(obj => { return obj.id === this.user.checkout.payment_data.payment_method_id; }) : null;
	}

	calculateTotal() {
		this.total = 0;
		if(this.cart) this.cart.map(product => this.total += product.total || 0);
	}

	confirm() {
		this.confirmPayment.emit(this.user)
	}

	ngOnChanges(changes: SimpleChanges) {
        if (changes['cart']) this.calculateTotal();
	}
}