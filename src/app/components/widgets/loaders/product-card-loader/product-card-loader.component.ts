import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product-card-loader',
	template: `
		<article class="item">
			<div class="product-img">
				<div class="animated-background img"></div>
			</div>
			<div class="animated-background title my-3 w-75"></div>
			<div class="animated-background description mb-1"></div>
			<div class="animated-background description w-50"></div>
		</article>
	`,
	styleUrls: ['./product-card-loader.component.scss']
})

export class ProductCardLoaderComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}