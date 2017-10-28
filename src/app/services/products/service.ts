import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductsService {
    constructor(private db: AngularFireDatabase) { }

    getHighlightProducts() {
		return this.db.list('/products/published', ref => ref.orderByChild('highlight').equalTo(true).limitToLast(12)).snapshotChanges().map(products => {
			return this.processSnapshots(products).reverse();
		})
	}

    getLatestProducts() {
		return this.db.list('/products/published', ref => ref.limitToLast(12)).snapshotChanges().map(products => {
			return this.processSnapshots(products).reverse();
		})
	}
		
	getDetail(id) {
		return this.db.object(`/products/published/${id}`).valueChanges();
	}

	processSnapshots(snapshots) {
		let snapshostArr = [];
		
		snapshots.map(snapshot => {
			let $key = snapshot.payload.key;
			let data = { $key, ...snapshot.payload.val() };
			snapshostArr.push(data);
		})
					
		return snapshostArr;
	}
}
