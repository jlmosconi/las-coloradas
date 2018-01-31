import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as products from './products';
import { doPayment } from './checkout';

const express = require('express');
const cors = require('cors');
const app = express();

const nodeEnv = process.env.NODE_ENV;

admin.initializeApp(functions.config().firebase);

const whitelists = {
    development : [
        'http://localhost:4200',
        'https://las-coloradas-development.firebaseapp.com',
    ],
    production : [
        'https://las-coloradas-f30ce.firebaseapp.com',
        'https://lascoloradas.com.ar'
    ]
};

const corsOptions = {
    origin: function (origin:any, callback:any) {
        if (!origin) {
            callback(null, true);
        } else {
            var originIsWhitelisted = whitelists[nodeEnv].indexOf(origin) !== -1;
            console.log(whitelists[nodeEnv], origin, whitelists[nodeEnv].indexOf(origin) !== -1);
            callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted)
        }

    },
    methods: ['GET', 'POST']
};

app.use(cors(corsOptions));

export const updateProducts = products.updateProducts;

app.post('/payment', (request:any, response:any) => {
    let uid = request.body.userID;
    let checkout = request.body.checkout;

    doPayment(uid, checkout)
        .then(resp => {
            response.send(resp);
        })
        .catch(err => {
            response.status(500).send(err);
        })
    
})

exports.app = functions.https.onRequest(app);

