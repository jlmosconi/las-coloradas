import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { getCustomerByID, createCustommer } from '../services/mercadopago/customers';
import { createPayment } from '../services/mercadopago/payments'

var MP = require ("mercadopago");
var mp = new MP (functions.config().mercadopago.access_token);

export const doPayment = functions.database
    .ref('jobs/payments/{paymentId}')
    .onWrite( async event => {
        const paymentId = event.params.paymentId;
        const data = event.data.val();
        console.log(data);
        console.log(paymentId);
        // console.log(event.data.ref.val();

        if (!data) return;


        // return this.mpConfigGet.then(() => {
            // let payment = mp.post ({
            //     "uri": "/v1/payments",
            //     "data": {
            //             "transaction_amount": 100,
            //             "token": "150080348dfd1af1aebd75bb689e6887",
            //             "description": "Title of what you are paying for",
            //             "installments": 1,
            //             "payment_method_id": "visa",
            //             "payer": {
            //                 "email": "test_user_19653727@testuser.com"
            //             }
            //         }
            // });
    
    
        //     return payment.then(payment, (err) => {
        //         console.log("payment: " + payment)
        //         console.log("err: " + err)
        //         return payment;
        //     })
        // })

        var payment_data = {
            transaction_amount: data.transaction_amount,
            token: data.token,
            description: 'Gorgeous Copper Bag',
            installments: 1,
            payment_method_id: data.payment_method_id,
            payer: {
              email: 'email@test.com'
            }
        };

        // mp.post ({
        //     "uri": "/v1/payments",
        //     "data": payment_data
        // })
        // .then (payment => {
        //     console.log(payment)
        // })
        // .catch(err => {
        //     console.log('error payment: ' + err)
        // })

       getCustomerByID('128416941-naemCyzSUPQBcG')
        .then(exist => {
            if(exist) {
                console.warn('exist');
                // cobrar pago
                createPayment(payment_data)
                    .then(payment => {
                        console.log('payment:' + payment)
                    })
            } else {
                console.warn('not exist');
                createCustommer({email: "jlmosconi@gmail.com"})
                    .then(create => {
                        if(create) {
                            console.log("creado con éxito")
                        } else {
                            console.log("no creado")
                        }
                    })
            }
        })

    });