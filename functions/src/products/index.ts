import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const algoliasearch = require('algoliasearch');
const algolia = algoliasearch(functions.config().algolia.appid, functions.config().algolia.adminkey);
const index = algolia.initIndex('products');

export const updateProducts = functions.database
    .ref('products/published/{productId}')
    .onWrite( async event => {
        const productId = event.params.productId;
        const data = event.data.val();

        if (!data) {
            return index.deleteObject(productId, (err) => {
                if (err) throw err
                console.log(productId)
            });
        }

        data.objectID = data.id = +productId;

        return index.saveObject(data, (err, content) => {
            if (err) throw err
            console.log(data.objectID)
        });
    });