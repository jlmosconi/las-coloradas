import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-search-bar',
	host: {
		'(document:click)': 'handleClick($event)',
		'(window:keyup)'  : 'handleKeyup($event)'
    },
	template:
		`
		<form novalidate [formGroup]="parent" (ngSubmit)="onSubmit()" class="searchBarMain mx-auto" id="searchBar" [ngClass]="{ 'suggestions-show': searchResult.length, 'full': setFull }">
			<div class="d-flex align-items-center h-100">
				<button type="button" mat-icon-button class="ml-1" (click)="onSubmit();">
					<mat-icon class="searchBarSearchIcon">search</mat-icon> 
				</button>
				<input type="text" id="searchBarInput" placeholder="Buscar..." formControlName="search" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="off">
				<mat-spinner *ngIf="loading"></mat-spinner>
				<button type="button" mat-icon-button class="mr-1" (click)="clear.emit();">
					<mat-icon>clear</mat-icon> 
				</button>
			</div>

			<div class="suggestions w-100 mat-elevation-z5" [ngClass]="{ 'suggestions-hidde': !searchResult.length }">
				<ul>
					<li *ngFor="let product of searchResult">
						<app-product-search-card [product]="product" (click)="clear.emit();"></app-product-search-card>
					</li>
				</ul>

				<div class="footer d-block text-center" (click)="onSubmit()">
					Ver todos los resultados para {{ parent.value.search }}
				</div>
			</div>
		</form>
		`
	,
	styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
	@Input() parent: FormGroup;
	@Input() searchResult;
	@Input() setFull: boolean;
	@Input() loading;
	@Output() search: EventEmitter<any> = new EventEmitter();
	@Output() clear: EventEmitter<any> = new EventEmitter();
	constructor() { }
	ngOnInit() { }

	onSubmit() {
		if(this.parent.value.search) {
			let q = (this.parent.value.search).toLowerCase().trim().split(' ').join('-');
			this.searchResult = [];
			this.search.emit(q);
			if(this.setFull) this.clear.emit();
		}
	}

	handleClick(event){
		let clickedComponent = event.target,
			searchBarInput = <HTMLInputElement>document.getElementById('searchBarInput'),
			inside = false;

		do {
			if(clickedComponent === searchBarInput) {
				inside = true;
			}
		   clickedComponent = clickedComponent.parentNode;
		} while (clickedComponent);
		 
		if(!inside) {
			this.searchResult = [];
		}
	}

	handleKeyup(event) {
		if(this.searchResult.length && event.code === 'Escape') this.searchResult = [];
	}
}