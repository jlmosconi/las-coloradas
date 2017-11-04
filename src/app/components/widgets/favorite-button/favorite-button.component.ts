import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToFavorites, RemoveToFavorites } from "../../../actions/products";

@Component({
	selector: 'app-favorite-button',
	template:
		`
		<button mat-mini-fab color="primary" class="d-flex align-items-center justify-content-center" (click)="addToFavorite()">
			<mat-icon class="d-flex align-items-center justify-content-center">
				<span *ngIf="isFavorite">favorite</span>
				<span *ngIf="!isFavorite">favorite_border</span>
			</mat-icon>
		</button>
		`
	,
	styleUrls: ['./favorite-button.component.scss']
})

export class FavoriteButtonComponent implements OnInit {
	@Input() id;
	@Input() isFavorite;
	constructor(private store: Store<any>) { }

	ngOnInit() { }

	addToFavorite() {
		if(!this.isFavorite) {
			this.store.dispatch(new AddToFavorites(this.id));
		} else {
			this.store.dispatch(new RemoveToFavorites(this.id));
		}
	}
}