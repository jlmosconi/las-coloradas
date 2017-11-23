import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-shopping-cart-icon',
	template:
		`
		<button mat-icon-button color="primary" routerLink="/carrito">
			<mat-icon>shopping_cart</mat-icon>
			<span class="count d-flex align-items-center justify-content-center mat-elevation-z1" *ngIf="count > 0">{{ count }}</span>
		</button>
		`
	,
	styleUrls: ['./shopping-cart-icon.component.scss']
})

export class ShoppingCartIconComponent implements OnInit {
	@Input() cart;
	count: number = 0;
	constructor() { 

	}

	ngOnInit() { }

	ngOnChanges(changes: SimpleChanges) {
        if (changes['cart']) {
			this.count = 0;
			if(this.cart) { 
				Object.keys(this.cart).map((key, index) => {
					this.count = this.count + this.cart[key];
				});
			}
			
        }
	}
}