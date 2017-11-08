import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import * as algoliasearch from 'algoliasearch';
import { environment } from "../../../environments/environment";

const client = algoliasearch(environment.algolia.appId, environment.algolia.apiKey);
const index = client.initIndex(environment.algolia.indexName);

@Injectable()
export class ProductsService {
    constructor(private db: AngularFireDatabase) { }

    // getHighlightProducts() {
	// 	return this.db.list('/products/published', ref => ref.orderByChild('highlight').equalTo(true).limitToLast(12)).snapshotChanges().map(products => {
	// 		return this.processSnapshots(products).reverse();
	// 	})
	// }

    // getLatestProducts() {
	// 	return this.db.list('/products/published', ref => ref.limitToLast(12)).snapshotChanges().map(products => {
	// 		return this.processSnapshots(products).reverse();
	// 	})
	// }

	getHighlightProducts() {
		return new Promise((resolve, reject) => {
			index.search(
				{
					hitsPerPage: 12,
					facets: 'highlight',
					facetFilters: 'highlight:true',
					
				},
				function searchDone(err, content) {
					if (err) {
						console.error(err);
						reject();
					}

					resolve(content.hits);
				}
			)
		});
	}

	getLatestProducts() {
		return new Promise((resolve, reject) => {
			index.search(
				{
					hitsPerPage: 12,
					
				},
				function searchDone(err, content) {
					if (err) {
						console.error(err);
						reject();
					}

					resolve(content.hits);
				}
			)
		});
	}
		
	getDetail(id) {
		return new Promise((resolve, reject) => {
			index.getObject(id, (err, content) => {
					if (err) {
						console.error(err);
						reject();
					}

					resolve(content);
				}
			)
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
