import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-search',
	template:
	`
		<div class="container">
			<div class="pt-3 pt-md-4">
				<app-products-grid
					[list]="products" 
					[currentPage]="currentPage"
					[totalPages]="totalPages"
					[title]="'Resultados para: ' + title" 
					[favorites]="favorites"
					[loading]="loading"
					(scroll)="scroll()">
				</app-products-grid>
			</div>
		</div>
	`,
	styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
	@Input() products;
	@Input() currentPage;
	@Input() totalPages;
	@Input() title;
	@Input() favorites;
	@Input() loading;
	@Output() onScroll: EventEmitter<any> = new EventEmitter();
	constructor() { }

	ngOnInit() { }

	scroll() {
		this.onScroll.emit();
	}
}