import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductsQueries {
    constructor(private db: AngularFireDatabase) { }

    getHighlightProducts() {
		// return this.db.list('/products/published', {
		// 	query: {
		// 		orderByChild: 'highlight',
		// 		equalTo: true
		// 	}
		// });

		return this.db.list('/products/published', ref => ref.orderByChild('highlight').equalTo(true)).snapshotChanges().map(test => {
			console.warn(test);
			return test
		})
	}
		
	getDetail(id) {
		return this.db.object(`/products/published/${id}`).valueChanges();
	}
}
