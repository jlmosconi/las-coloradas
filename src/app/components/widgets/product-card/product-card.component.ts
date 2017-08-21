import { Component, OnInit, Input } from '@angular/core';
import { noImageProduct } from "../../../constants/app.constants";

@Component({
	selector: 'app-product-card',
	template: 
	`
		<div class="product w-100">
			<div class="product-img">
				<div class="img" [ngStyle]="{'background-image': 'url(' + photo + ')'}"></div>
			</div>
			<div class="product-info">
				<div class="product-price">
					<span class="money">$ {{ product.cost }}</span>
				</div>
				<div class="product-name">
					<a title="{{ product.title }}">{{ product.title }}</a>
				</div>
				<div class="product-description mb-2">
					<p>{{ product.description }}</p>
				</div>
				<div class="product-links py-3 d-flex">
					<button md-raised-button color="accent" class="text-white mr-1">
						Ver
					</button>
					
					<button md-raised-button color="primary">
						Añadir al carrito
					</button>
				</div>
			</div>
		</div>	
	`,
	styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {
	@Input() product;
	private noImageProduct = noImageProduct;
	constructor() { }

	ngOnInit() { }

	get photo() {
		return this.product && this.product.photoUrl ? this.product.photoUrl : noImageProduct;
	}
}