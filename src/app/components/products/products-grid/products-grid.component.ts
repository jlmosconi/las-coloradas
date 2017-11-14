import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-products-grid',
	template: 
		`
			grid
		`
	,
	styleUrls: ['./products-grid.component.scss']
})

export class ProductsGridComponent implements OnInit {
	@Input() list;
	@Input() currentPage;
	@Input() totalPages;
	@Input() title;
	@Input() loading;
	showLoader: boolean = false;
	@Output() scroll: EventEmitter<any> = new EventEmitter();
	items;
	constructor() { 
		this.items = this.calculateItems(window.innerWidth);
	}

	ngOnInit() { }

	onResize(event) {
		this.items = this.calculateItems(event.target.innerWidth);
	}

	calculateItems(w) {
		let items = 6;

		if(w <= 480) {
			items = 3;
		} else if (w >= 481 && w <= 768) {
			items = 4;			
		} else if (w >= 769 && w <= 1024) {
			items = 5;
		}

		return Array(items).fill(0).map((x,i)=>i);
	}

	onScroll() {
		this.currentPage != (this.totalPages - 1) ? (this.scroll.emit(), this.showLoader = true) : this.showLoader = false;
	}
}