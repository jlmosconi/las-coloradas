import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
	@Input() films;
	@Input() currentPage;
	@Input() totalPages;
	@Input() title;
	@Input() loading;
	@Output() onScroll: EventEmitter<any> = new EventEmitter();
	constructor() { }

	ngOnInit() { }

	scroll() {
		this.onScroll.emit();
	}
}