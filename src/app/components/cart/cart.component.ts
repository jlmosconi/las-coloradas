import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-cart',
	template: 
		`
		<!--      Wizard container        -->
		<div class="wizard-card">
		<div class="wizard-navigation">
		<div class="progress-with-circle">
			<div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="4" style="width: 12.5%;"></div>
		</div>
		<ul class="nav nav-pills">
			<li class="active" style="width: 25%;">
				<a href="#location" data-toggle="tab" aria-expanded="true">
					<div class="icon-circle checked">
						<i class="ti-map material-icons">shopping_cart</i>
					</div>
					Carrito
				</a>
			</li>
			<li style="width: 25%;">
				<a href="#type" data-toggle="tab">
					<div class="icon-circle">
						<i class="ti-direction-alt material-icons">local_shipping</i>
					</div>
					Envío
				</a>
			</li>
			<li style="width: 25%;">
				<a href="#facilities" data-toggle="tab">
					<div class="icon-circle">
						<i class="ti-panel material-icons">payment</i>
					</div>
					Pago
				</a>
			</li>
			<li style="width: 25%;">
				<a href="#description" data-toggle="tab">
					<div class="icon-circle">
						<i class="ti-comments material-icons">check</i>
					</div>
					Confirmar
				</a>
			</li>
		</ul>
	</div></div> <!-- wizard container -->


			<div *ngIf="!cart">
				Carrito vacío
			</div>
			<div class="table-responsive" *ngIf="cart" style="padding-top:150px;">
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
						<tr *ngFor="let product of cart">
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
								1
								<div class="btn-group ml-3">
									<button mat-raised-button class="btn btn-round btn-info btn-xs" (click)="changeStock(product.id, '');"> <i class="material-icons">remove</i> </button>
									<button mat-raised-button class="btn btn-round btn-info btn-xs" (click)="addStock(product.id);"> <i class="material-icons">add</i> </button>
								</div>
							</td>
							<td class="td-number">
								<small>$</small>{{ product.price * (product.quantity || 1) }}
							</td>
							<td class="td-actions">
								<button mat-icon-button type="button" rel="tooltip" data-placement="left" title="" class="btn btn-simple" data-original-title="Remove item" (click)="deleteProduct(product.id);">
									<i class="material-icons">close</i>
								</button>
							</td>
						</tr>
						<tr>
							<td colspan="3"></td>
							<td class="td-total">
								Total
							</td>
							<td class="td-price">
								<small>€</small>2,346
							</td>
							<td colspan="1"></td>
						</tr>
					</tbody>
				</table>
			</div>
		`,
	styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
	@Input() cart;
	constructor() { }

	ngOnInit() { }
}