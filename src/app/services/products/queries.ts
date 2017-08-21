import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductsQueries {
    constructor(private db: AngularFireDatabase) { }

    getHighlightProducts() {
        return this.db.list('/products/published', {
			query: {
			  orderByChild: 'highlight',
			  equalTo: true
			}
		  });
    }
}
