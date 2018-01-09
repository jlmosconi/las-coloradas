import * as functions from 'firebase-functions';

var MP = require ("mercadopago");
var mp = new MP (functions.config().mercadopago.access_token);

export const createPayment = (paymentData:any) => {
    return new Promise((resolve, reject)=>{
       mp.post ({
            "uri": "/v1/payments",
            "data": paymentData
        })
        .then (payment => {
            console.log('payment service: ' + payment.response);
            resolve(true)
        })
        .catch(err => {
            console.log('Error Payment: ' + err)
            resolve(false)
        })
    });
};