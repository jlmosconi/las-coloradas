import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

const nodeEnv = process.env.NODE_ENV;

import * as products from './products';

export const updateProducts = products.updateProducts;