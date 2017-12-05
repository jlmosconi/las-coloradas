import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-brand-list-item-loader',
	template:
		`
		<article class="item py-2">
			<div class="animated-background logo w-75"></div>
		</article>
		`
	,
	styleUrls: ['./brand-list-item-loader.component.scss']
})

export class BrandListItemLoaderComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}