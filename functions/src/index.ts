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
        'http://localhost:4200',
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
            callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted)
        }

    },
    methods: ['GET', 'POST']
};

app.use(cors(corsOptions));

export const updateProducts = products.updateProducts;


app.get('/timestamp', (request:any, response:any) => {
    response.send(`${Date.now()}`);
})

app.post('/payment', (request:any, response:any) => {
    var uid = request.body.userID;
    var checkout = request.body.checkout;

    doPayment(uid, checkout)
        .then(resp => {
            response.send(resp);  
        })
        .catch(err => {
            response.status(500).send(err);
        })
    
})

exports.app = functions.https.onRequest(app);

