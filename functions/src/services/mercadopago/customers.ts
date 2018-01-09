import * as functions from 'firebase-functions';

var MP = require ("mercadopago");
var mp = new MP (functions.config().mercadopago.access_token);

export const getCustomerByID = (id:any) => {
    return new Promise((resolve, reject) => {
        mp.get ({
            "uri": "/v1/customers/" + id,
        })
        .then (customer => {
            /*customer exist*/
            console.log(customer)
            resolve(true);
        })
        .catch(err => {
            /*customer not exist*/
            resolve(false);
        })
    });
};

export const createCustommer = (email:any) => {
    return new Promise((resolve, reject) => {
        mp.post ({
            "uri": "/v1/customers/",
            "data": {
                "email" : email
            }
        })
        .then (customer => {
            resolve(customer);
        })
        .catch(err => {
            resolve(false);
        })
    });
};