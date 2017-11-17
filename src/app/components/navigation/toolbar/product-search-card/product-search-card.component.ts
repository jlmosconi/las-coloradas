import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-product-search-card',
	template: 
		`
		<a class="product d-flex align-items-center" [routerLink]="['/producto', product.id, product.slug]">
			<div class="img">
				<img [src]="product.photoUrl" [alt]="product.title" *ngIf="product.photoUrl">
				<!--<app-no-image type="product" *ngIf="!product.photoUrl"></app-no-image>-->
			</div>
			<div class="data d-flex flex-column align-self-center w-100">
				<span class="title">
					{{ product.title }}
				</span>
				<span class="price">$ {{ product.price }}</span>
			</div>
		</a>
		`
	,
	styleUrls: ['./product-search-card.component.scss']
})

export class ProductSearchCardComponent implements OnInit {
	@Input() product;
	constructor() { }

	ngOnInit() { }
}