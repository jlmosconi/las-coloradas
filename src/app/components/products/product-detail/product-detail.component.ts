import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-product-detail',
	template: 
	`
		{{
			product | json
		}}
	`,
	styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
	@Input() product;
	constructor() { }

	ngOnInit() { }
}