import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToCart } from "../../../actions/products";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-add-to-cart',
	template:
	`
	<div class="d-flex justify-content-start align-items-center">
		<mat-form-field hintLabel="Stock {{stock}}" class="mr-3" floatPlaceholder="always" [formGroup]="form">
			<input type="number" matInput min="1" [max]="stock" placeholder="Cantidad" formControlName="quantity">
		</mat-form-field>
		<button mat-raised-button color="primary" (click)="addToCart();" [disabled]="form.invalid">
			Añadir al carrito
		</button>
	</div>
	`
	,
	styleUrls: ['./add-to-cart.component.scss']
})

export class AddToCartComponent implements OnInit {
	@Input() id;
	@Input() stock;
	form: FormGroup;
	constructor(
		private store: Store<any>,
		private fb: FormBuilder
	) {
		
	 }

	ngOnInit() {
		this.form = this.fb.group({
			quantity: [1, [Validators.required, Validators.min(1), Validators.max(this.stock)]]
		});
	 }

	addToCart() {
		let quantity = this.form.value.quantity;
		this.store.dispatch(new AddToCart({
			id: this.id,
			quantity: quantity
		}));
	}
}