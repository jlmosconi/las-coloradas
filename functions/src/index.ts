import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

const nodeEnv = process.env.NODE_ENV;

import * as products from './products';
import * as checkout from './checkout';

export const updateProducts = products.updateProducts;
export const doPayment = checkout.doPayment;