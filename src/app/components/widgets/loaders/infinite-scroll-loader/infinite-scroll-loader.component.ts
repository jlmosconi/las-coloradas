import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-infinite-scroll-loader',
	template:
		`
			<mat-spinner></mat-spinner>
		`
	,
	styleUrls: ['./infinite-scroll-loader.component.scss']
})

export class InfiniteScrollLoaderComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}