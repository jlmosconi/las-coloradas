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

        data.objectID = data.id = productId;
        data.slug = data.title ? slugify(data.title) : null;

        return index.saveObject(data, (err, content) => {
            if (err) throw err
            console.log(data.objectID)
        });
    });


function slugify(string){
    let specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

    for (var i = 0; i < specialChars.length; i++) {
        string= string.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    }

    string = string.toLowerCase();
    string = string.replace(/ /g,"-");
    string = string.replace(/á/gi,"a");
    string = string.replace(/é/gi,"e");
    string = string.replace(/í/gi,"i");
    string = string.replace(/ó/gi,"o");
    string = string.replace(/ú/gi,"u");
    string = string.replace(/ñ/gi,"n");
    
    return string;
}