import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-products-grid',
	template: 
		`
			<app-products-header [title]="title" *ngIf="title"></app-products-header>

			<div class="grid">
				<div class="grid-wrapper" *ngIf="list.length">
					<div class="card" *ngFor="let product of list">
						<app-product-card [product]="product" [favorites]="favorites"></app-product-card>
					</div>
				</div>
				<div class="grid-wrapper" (window:resize)="onResize($event)" *ngIf="loading && !showLoader">
					<div class="card" *ngFor="let item of items">
						<app-product-card-loader></app-product-card-loader>
					</div>
				</div>

				<div *ngIf="!list.length && !loading">
					<app-no-results-found></app-no-results-found>
				</div>
			</div>

			<div
				*ngIf="list.length"
				infiniteScroll
				[infiniteScrollDistance]="2"
				[infiniteScrollThrottle]="300"
				(scrolled)="onScroll()">
			</div>

			<app-infinite-scroll-loader *ngIf="list.length && showLoader"></app-infinite-scroll-loader>
		`
	,
	styleUrls: ['./products-grid.component.scss']
})

export class ProductsGridComponent implements OnInit {
	@Input() list;
	@Input() currentPage;
	@Input() totalPages;
	@Input() title;
	@Input() favorites;
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
		let items = 4;

		if(w <= 480) {
			items = 1;
		} else if (w >= 481 && w <= 767) {
			items = 2;
		} else if (w >= 768 && w <= 1024) {
			items = 3;
		}

		return Array(items).fill(0).map((x,i)=>i);
	}

	onScroll() {
		// this.currentPage != (this.totalPages - 1) ? (this.scroll.emit(), this.showLoader = true) : this.showLoader = false;
		if(this.currentPage != (this.totalPages - 1)) {
			if(!this.loading) {
				this.scroll.emit();
				this.showLoader = true
			}
		} else {
			this.showLoader = false;
		}
	}
}