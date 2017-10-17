import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { GetDetail } from "../../actions/products";
import { onStateChangeObservable } from '../../utils/store';

@Component({
	selector: 'app-product',
	template: 
		`
			<app-product-detail [product]="product$ | async"></app-product-detail>
		`
	,
	styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
	product$: Observable<any>;
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private store: Store<any>,
	) { }

	ngOnInit() {
		const id = this.activatedRoute.snapshot.params['id'];
		this.store.dispatch(new GetDetail(id));
		this.product$ = onStateChangeObservable(this.store, 'products.selectedProduct');
	 }
}