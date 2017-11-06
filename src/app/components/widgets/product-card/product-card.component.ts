import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToCart, RemoveToCart } from "../../../actions/products";

@Component({
	selector: 'app-product-card',
	template: 
	`
		<article class="product w-100">
			<div class="product-img">
				<img [src]="product.photoUrl" [alt]="product.title" *ngIf="product.photoUrl">
				<!--<app-no-image type="product" *ngIf="!product.photoUrl"></app-no-image>-->
				<div class="favorite d-flex">
					<app-favorite-button [id]="product.$key" [isFavorite]="isFavorite"></app-favorite-button>
				</div>

				<a [routerLink]="['/producto', product.$key]" title="{{ product.title }}">
					<div class="see"></div>
				</a>
			</div>
			<div class="product-info">
				<div class="product-price">
					<span class="money">$ {{ product.price }}</span>
				</div>
				<div class="product-name">
					<a [routerLink]="['/producto', product.$key]" title="{{ product.title }}">{{ product.title }}</a>
				</div>
				<div class="product-description mb-4">
					<p>{{ product.description }}</p>
				</div>
				<div class="product-links pb-3 d-flex">
					<button mat-raised-button color="accent" class="text-white mr-1" [routerLink]="['/producto', product.$key]">
						Ver
					</button>
					
					<button mat-raised-button color="primary">
						Añadir al carrito
					</button>
				</div>
			</div>
		</article>	
	`,
	styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {
	@Input() product;
	@Input() favorites
	isFavorite: boolean;
	
	constructor() { }

	ngOnInit() { }

	ngOnChanges(changes: SimpleChanges) {
        if (changes['favorites']) {
			let keys = Object.keys(this.favorites || []);
			this.isFavorite = !!keys.find(favorite => favorite === this.product.$key);
        }
    }
}