import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { getCustomerByID, createCustommer } from '../services/mercadopago/customers';
import { createPayment } from '../services/mercadopago/payments';
import { getUserByID, setUserCustomerID } from '../services/users/service';

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

        var payment_data:any = {
            transaction_amount: data.transaction_amount,
            token: data.token,
            description: 'Compra en Las Coloradas.',
            installments: 1,
            payment_method_id: data.payment_method_id,
            payer: {
                "email": null,
            }
        };

        getUserByID(data.userID)
            .then((user:any) => {
                console.log(user)
                payment_data.payer.email = user.email;
                getCustomerByID(user.customerID)
                    .then(exist => {
                        if(exist) {
                            console.log('exist');
                            // Si existe el usuario, cobrar pago.
                            createPayment(payment_data)
                                .then(payment => {
                                    console.log('payment:' + payment);
                                    //mensaje de pago en algún lado, jijiji.
                                })
                        } else {
                            console.log('not exist');
                            // El usuario no existe, lo creo.
                            createCustommer(user.email)
                                .then((customer:any) => {
                                    if(customer) {
                                        console.log("creado con éxito " + customer.response);
                                        //Usuario creado con éxito, updateo usuario con id de customer.
                                        setUserCustomerID(user.uid, customer.response.id);

                                        //cobro pago.
                                        createPayment(payment_data)
                                            .then(payment => {
                                                console.log('payment:' + payment);
                                                //mensaje de pago en algún lado, jijiji.
                                            })

                                    } else {
                                        console.log("no creado");
                                    }
                                })
                        }
                    })
            })
    });