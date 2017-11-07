import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-cart',
	template: 
		`
			<div>
				{{ cart |json }}
			</div>
			<div *ngIf="!cart">
				Carrito vacío
			</div>
		`,
	styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
	@Input() cart;
	constructor() { }

	ngOnInit() { }
}