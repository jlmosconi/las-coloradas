import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

import * as products from './products';


export const updateProducts = products.updateProducts;