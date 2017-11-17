import { Injectable } from '@angular/core';
import * as algoliasearch from 'algoliasearch';
import { environment } from "../../../environments/environment";

const client = algoliasearch(environment.algolia.appId, environment.algolia.apiKey);
const index = client.initIndex(environment.algolia.indexName);

@Injectable()
export class ProductsService {
    constructor() { }

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

	getRelatedProducts(categoryId, productId) {
		return new Promise((resolve, reject) => {
			index.search(
				{
					filters: `NOT id:${productId}`,
					facetFilters: `categories.${categoryId}:true`,
				},
				function searchDone(err, content) {
					if (err) {
						console.error(err);
						reject();
						return;
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
			})
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

	quickSearch(query) {
		return new Promise((resolve, reject) => {
			index.search(
				{
					query: query,
					hitsPerPage: 6
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

	search(query, page) {
		return new Promise((resolve, reject) => {
			index.search(
				{
					query: query,
					hitsPerPage: 12,
					page: page || 0
				},
				function searchDone(err, content) {
					if (err) {
						console.error(err);
						reject();
					}

					resolve({
						hits: content.hits,
						currentPage: content.page,
						totalPages: content.nbPages
					});
				}
			)
		});
	}
}
