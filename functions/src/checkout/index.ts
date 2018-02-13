import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { getCustomerByID, createCustommer } from '../services/mercadopago/customers';
import { createPayment } from '../services/mercadopago/payments';
import { getUserByID, setUserCustomerID, setUserPaymentID, cleanCheckout } from '../services/users/service';
import { calculateTotal } from '../products/index';
import { savePayment } from '../services/payments/service';

var MP = require ("mercadopago");
var mp = new MP (functions.config().mercadopago.access_token);

export const doPayment = (uid:any, checkout:any) => {
    return new Promise((resolve, reject)=>{
        
        var payment_data:any = {
            transaction_amount: null,
            token: checkout && checkout.payment_data ? checkout.payment_data.token : null,
            description: 'Compra en Las Coloradas.',
            installments: 1,
            payment_method_id: checkout && checkout.payment_data ? checkout.payment_data.payment_method_id : null,
            payer: {
                "email": null,
            }
        };

        if(checkout && checkout.shipments && checkout.shipments.mode) {
            delete checkout.shipments.id;
            payment_data.shipments = checkout.shipments;
            payment_data.shipments.dimensions = "30x30x30,500"
        };

        calculateTotal(checkout.cart)
            .then((transaction_amount:any) => {
                console.log('total: ' + transaction_amount);
                payment_data.transaction_amount = transaction_amount;

                getUserByID(uid)
                    .then((user:any) => {
                        console.log('User:' + user)
                        payment_data.payer.email = user.email;

                        getCustomerByID(user.customerID)
                            .then(exist => {
                                if(exist) {
                                    console.log('Customer Exist.');
                                    // Si existe el usuario, cobrar pago.
                                    createPayment(payment_data)
                                        .then((payment:any) => {
                                            console.log('Payment:' + payment);
                                            savePayment(payment, user.uid);
                                            setUserPaymentID(user.uid, payment.id);
                                            cleanCheckout(user.uid);
                                            resolve(true);
                                        })
                                        .catch(err => {
                                            reject(err);
                                        })
                                } else {
                                    console.log('Customer not exist.');
                                    // El usuario no existe, lo creo.
                                    createCustommer(user.email)
                                        .then((customer:any) => {
                                            if(customer) {
                                                console.log("Creado con éxito " + customer.response);
                                                //Usuario creado con éxito, updateo usuario con id de customer.
                                                setUserCustomerID(user.uid, customer.response.id);

                                                //cobro pago.
                                                createPayment(payment_data)
                                                    .then(payment => {
                                                        console.log('Payment:' + payment);
                                                        cleanCheckout(user.uid);
                                                        resolve(true);
                                                    })
                                                    .catch(err => {
                                                        reject(err);
                                                    })

                                            } else {
                                                console.log("no creado");
                                                reject();
                                            }
                                        })
                                        .catch(err => {
                                            console.log("Error");
                                            reject(err);
                                        })
                                }
                            })
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
            .catch(err => {
                reject(err);
            })
    });
}