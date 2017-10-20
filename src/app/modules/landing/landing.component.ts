import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsQueries } from "../../services/products/queries";
import { GetHighlights, GetLatest } from "../../actions/products";
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../utils/store';

@Component({
	selector: 'app-landing',
	template: `
	<section class="jumbotron mb-4 mb-md-5">
		<div class="container d-flex align-items-center">
			<div class="info text-center text-sm-left">
				<h1 class="jumbotron-heading">Armería <span>Las Coloradas</span></h1>
				<p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum varius ex. Morbi at orci diam. Cras interdum maximus turpis consectetur lobortis.</p>
				<!--<p>
					<a href="#" class="btn btn-primary">Main call to action</a>
					<a href="#" class="btn btn-secondary">Secondary action</a>
				</p>-->
			</div>
		</div>
	</section>

	<div class="pb-4 pb-md-5">
		<app-product-carousel [title]="'Destacados'" [products]="highlights$ | async"></app-product-carousel>
	</div>

	<div class="pb-4 pb-md-5">
		<app-product-carousel [title]="'Agregados recientemente'" [products]="latest$ | async"></app-product-carousel>
	</div>
	`,
	styleUrls: ['./landing.component.scss']
})

export class LandingContainerComponent implements OnInit {
	latest$: Observable<any>;
	highlights$: Observable<any>;
	constructor(private store: Store<any>) {
		store.dispatch(new GetLatest({}));
		store.dispatch(new GetHighlights({}));
		this.latest$ = onStateChangeObservable(store, 'products.latest');
		this.highlights$ = onStateChangeObservable(store, 'products.highlights');
	}

	ngOnInit() {}
}