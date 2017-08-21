import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProductsQueries } from "../../services/products/queries";
import { ActionTypes, GetHighlights } from "../../actions/products";
import { onStateChangeObservable } from '../../utils/store';

@Component({
	selector: 'app-landing',
	template: `
	<section class="jumbotron">
		<div class="container">
			<div class="info text-center text-sm-left">
				<h1 class="jumbotron-heading">Armería Las Coloradas</h1>
				<p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum varius ex. Morbi at orci diam. Cras interdum maximus turpis consectetur lobortis.</p>
				<p>
					<a href="#" class="btn btn-primary">Main call to action</a>
					<a href="#" class="btn btn-secondary">Secondary action</a>
				</p>
			</div>
		</div>
	</section>

	<div class="my-5">
		<h2 class="page-heading">Destacados</h2>
		<app-product-list [products]="list$ | async"></app-product-list>
	</div>
	`,
	styleUrls: ['./landing.component.scss']
})

export class LandingContainerComponent implements OnInit {
	list$: FirebaseListObservable<any[]>;
	constructor(private store: Store<any>) {}

	ngOnInit() {
		this.store.dispatch(new GetHighlights({}));
		this.list$ = onStateChangeObservable(this.store, 'products.highlights');
	 }
}