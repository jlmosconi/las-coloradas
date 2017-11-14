import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-products-header',
	template:
		`
			<div class="header">
				<h1>{{ title }}</h1>
			</div>
		`	
	,
	styleUrls: ['./products-header.component.scss']
})

export class ProductsHeaderComponent implements OnInit {
	@Input() title;
	constructor() { }

	ngOnInit() { }
}