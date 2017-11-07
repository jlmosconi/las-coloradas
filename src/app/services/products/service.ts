import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

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
		return new Promise((resolve, reject) => {
			firebase.database().ref(`/products/published/${id}`).once('value')
				.then(result => resolve(result.val()))
				.catch(err => reject())
		});
	}

	getProductsById(ids) {
		return new Promise((resolve, reject)=>{
			let promises = [];
			ids.map(id=>promises.push(this.getDetail(id)));
			if(promises.length) {
				Promise.all(promises)
					.then(results=>resolve(results))
					.catch(err=>reject(err))
			} else {
				resolve();
			}
		});
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
