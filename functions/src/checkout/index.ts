import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { getCustomerByID, createCustommer } from '../services/mercadopago/customers';
import { createPayment } from '../services/mercadopago/payments';
import { getUserByID, setUserCustomerID, setUserPaymentID, setUserCheckoutStatus } from '../services/users/service';
import { calculateTotal } from '../products/index';
import { savePayment } from '../services/payments/service';
import { removePaymentFromJobs } from '../services/jobs/service';

var MP = require ("mercadopago");
var mp = new MP (functions.config().mercadopago.access_token);

export const doPayment = (uid:any, checkout:any) => {
    return new Promise((resolve, reject)=>{
        // if (!data) return;
        
        var payment_data:any = {
            transaction_amount: null,
            token: checkout && payment_data ? checkout.payment_data.token : null,
            description: 'Compra en Las Coloradas.',
            installments: 1,
            payment_method_id: checkout && checkout.payment_data ? checkout.payment_data.payment_method_id : null,
            payer: {
                "email": null,
            }
        };

        console.log('ACAAA: ' + payment_data)

        calculateTotal(checkout.cart)
            .then((transaction_amount:any) => {
                console.log('total: ' + transaction_amount);
                payment_data.transaction_amount = transaction_amount;

                getUserByID(uid)
                    .then((user:any) => {
                        console.log(user)
                        payment_data.payer.email = user.email;
                        console.log('payment_data: ' + payment_data)
                        getCustomerByID(user.customerID)
                            .then(exist => {
                                if(exist) {
                                    console.log('exist');
                                    // Si existe el usuario, cobrar pago.
                                    createPayment(payment_data)
                                        .then(payment => {
                                            console.log('payment:' + payment);
                                                // Mensaje de pago en algún lado, jijiji.
                                                // updateo usuario con id del pago y detalles del mismo.
                                                //setUserPaymentID(user.uid, paymentId);
                                                savePayment(payment, user.uid);

                                                resolve(true);
                                                //remove payment from jobs
                                                // removePaymentFromJobs(paymentId);
                                        })
                                        .catch(err => {
                                            //mensaje de error
                                            // removePaymentFromJobs(paymentId);
                                            setUserCheckoutStatus(user.uid, false, err.message);
                                            reject(err);
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
    });
}