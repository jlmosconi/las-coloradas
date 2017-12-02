import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-cart',
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
								<div class="btn-group ml-3">
									<button mat-raised-button (click)="removeStock(product);" [disabled]="product.quantity -1 < 1"> <i class="material-icons">remove</i> </button>
									<button mat-raised-button (click)="addStock(product);" [disabled]="product.quantity + 1 > product.stock"> <i class="material-icons">add</i> </button>
								</div>
							</td>
							<td class="td-number">
								<small>$</small>{{ product.total }}
							</td>
							<td class="td-actions">
								<button mat-icon-button type="button" rel="tooltip" data-placement="left" title="" class="btn btn-simple" data-original-title="Remove item" (click)="delete(product.id, i);">
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
								<small>$</small>{{ total }}
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
	@Output() setStock: EventEmitter<any> = new EventEmitter();
	@Output() deleteProduct: EventEmitter<any> = new EventEmitter();
	total: number = 0;
	constructor() { }

	ngOnInit() { }

	addStock(product) {
		if(product.quantity + 1 <= product.stock) {
			product.quantity ++;
			this.setStock.emit({
				productId: product.id, 
				quantity: product.quantity
			});
			this.processProducts();
		}
	}

	removeStock(product) {
		if(product.quantity -1 >= 1) {
			product.quantity --;
			this.setStock.emit({
				productId: product.id, 
				quantity: product.quantity
			});
			this.processProducts();
		}
	}

	delete(id, index) {
		this.cart[index].state = 'deleted';
		this.deleteProduct.emit(id);
	}

	processProducts() {
		this.cart.map(product => product.total = product.quantity * product.price);
		this.calculateTotal();
	}

	calculateTotal() {
		this.total = 0;
		if(this.cart) this.cart.map(product => this.total += product.total || 0);
	}

	ngOnChanges(changes: SimpleChanges) {
        if (changes['cart']) this.calculateTotal();
	}
}