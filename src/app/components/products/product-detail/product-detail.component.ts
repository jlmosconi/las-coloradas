import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-product-detail',
	template: 
	`
		<div class="product">
			<div class="row">
				<div class="col-md-5">
					<div class="product-image-container text-center"> 
						<img [src]="product.photoUrl">
					</div>
				</div>

				<div class="col-md-7">
					<div class="product-info pt-3 pt-md-0">
						<div class="product-name mb-2"><h2>{{ product.title }} </h2></div>
						<div class="product-price"> $ {{ product.price }} </div>

						<div class="purchase d-flex justify-content-center justify-content-md-start align-items-center my-3 my-md-4">
							<app-add-to-cart [id]="product.id" [stock]="product.stock" class="mr-3"></app-add-to-cart>
							<app-favorite-button [id]="product.id" [isFavorite]="isFavorite"></app-favorite-button>
						</div>

						<div class="product-description">
							<h4>Descripción:</h4>
							<p>
								{{ product.description }}
							</p>
						</div>

						<app-alert [type]="'warning'" [message]="'Stock sujeto a modificaciones'" [icon]="false"></app-alert>
						
					</div>
				</div>
			</div>
		</div>

		<div class="pt-4 pt-md-5">
			<app-product-carousel [title]="'Relacionados'" [products]="related" [favorites]="favorites" [loading]="relatedLoading"></app-product-carousel>
		</div>
	`,
	styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
	@Input() product;
	@Input() related;
	@Input() relatedLoading;
	@Input() favorites;
	isFavorite: boolean;
	constructor() { }

	ngOnInit() { }

	ngOnChanges(changes: SimpleChanges) {
        if (changes['favorites']) {
			let keys = Object.keys(this.favorites || []);
			this.isFavorite = !!keys.find(favorite => favorite === this.product.id);
        }
	}

	addToCart(items) {
		console.warn(items);
	}
}