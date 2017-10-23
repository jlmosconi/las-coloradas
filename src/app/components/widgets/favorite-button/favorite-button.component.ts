import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-favorite-button',
	template:
		`
		<button mat-mini-fab color="primary" class="d-flex align-items-center justify-content-center" (click)="addToFavorite()">
			<mat-icon class="d-flex align-items-center justify-content-center">favorite_border</mat-icon>
		</button>
		`
	,
	styleUrls: ['./favorite-button.component.scss']
})

export class FavoriteButtonComponent implements OnInit {
	@Input() id;
	constructor() { }

	ngOnInit() { }

	addToFavorite() {
		console.log(this.id);
	}
}