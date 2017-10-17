import { Component, OnInit, Input } from '@angular/core';
// import { noImageProduct } from "../../../constants/app.constants";

@Component({
	selector: 'app-product-card',
	template: 
	`
		<article class="product w-100">
			<div class="product-img">
				<img [src]="product.photoUrl" [alt]="product.title" *ngIf="product.photoUrl">
				<!--<app-no-image type="product" *ngIf="!product.photoUrl"></app-no-image>-->
				<div class="favorite d-flex align-items-center">
					<span class="heart" aria-hidden="true"><mat-icon>favorite_border</mat-icon></span>
				</div>
				<div class="mepo"></div>
				<a [routerLink]="['/producto', product.id]" title="{{ product.title }}">
					<div class="see"></div>
				</a>
			</div>
			<!--<a [routerLink]="['/producto', product.id]" class="product-img">
				<div class="img" [ngStyle]="{'background-image': 'url(' + photo + ')'}"></div>
			</a>
			<div class="product-info">
				<div class="product-price">
					<span class="money">$ {{ product.cost }}</span>
				</div>
				<div class="product-name">
					<a [routerLink]="['/producto', product.id]" title="{{ product.title }}">{{ product.title }}</a>
				</div>
				<div class="product-description mb-2">
					<p>{{ product.description }}</p>
				</div>
				<div class="product-links py-3 d-flex">
					<button mat-raised-button color="accent" class="text-white mr-1" [routerLink]="['/producto', product.id]">
						Ver
					</button>
					
					<button mat-raised-button color="primary">
						Añadir al carrito
					</button>
				</div>
			</div>-->
		</article>	
	`,
	styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {
	@Input() product;
	// private noImageProduct = noImageProduct;
	constructor() { }

	ngOnInit() { }

	// get photo() {
	// 	return this.product && this.product.photoUrl ? this.product.photoUrl : noImageProduct;
	// }
}