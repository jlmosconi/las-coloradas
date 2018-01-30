import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as firebase from 'firebase';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',  'Access-Control-Allow-Methods': 'POST'})
};

declare var Mercadopago: any;
Mercadopago.setPublishableKey(environment.mercadopago.publishableKey);

@Injectable()
export class CheckoutService {
    constructor(private http:HttpClient) { }

    processCardData(data) {
        return new Promise((resolve, reject) => {
            let bin = data.cardNumber;

            Mercadopago.getPaymentMethod({
                "bin": bin
            }, 
            (status, response) => {
                if(status == 200) {
                    data.paymentMethodId = response[0].id;
                }
            });

            let cardExpirationDate = data.cardExpirationDate.split("/");
            
            data.cardExpirationMonth = cardExpirationDate[0].trim();
            data.cardExpirationYear = cardExpirationDate[1].trim();

            Mercadopago.createToken(data, 
                (status, response) => {
                    console.warn(response);
                    status != 200 && status != 201 ? resolve(null) : resolve({
                        token: response.id,
                        payment_method_id: data.paymentMethodId,
                        last_four_digits: response.last_four_digits
                    });
                }
            )
        }); 
    }

    processPaymentData(payload) {
        return new Promise((resolve, reject) => {
            payload.token ? resolve(payload) : resolve({payment_method_id: payload});
        });
    }
    
    confirmPayment(payload) {
        return new Promise((resolve, reject) => {
            // firebase.database().ref(`/jobs/payments`).push(payload)
            //         .then( _ => resolve(true))
            this.http.post(environment.server.url + '/payment', payload, {
                headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'POST' })
            })
            .subscribe(
                data => console.log('success', data),
                error => console.log('oops', error)
            );
        });
    }
}