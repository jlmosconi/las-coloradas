import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductsQueries {
    constructor(private db: AngularFireDatabase) { }

    getHighlightProducts() {
		return this.db.list('/products/published', ref => ref.orderByChild('highlight').equalTo(true)).snapshotChanges().map(products => {
			let productsArr = [];

			products.map(product => {
				let $key = product.payload.key;
				let data = { $key, ...product.payload.val() };
				productsArr.push(data);
			})
			
			return productsArr;
		})
	}
		
	getDetail(id) {
		return this.db.object(`/products/published/${id}`).valueChanges();
	}
}
