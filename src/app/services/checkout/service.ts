import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

declare var Mercadopago: any;
Mercadopago.setPublishableKey(environment.mercadopago.publishableKey);

@Injectable()
export class CheckoutService {
    constructor() { }

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
                    status != 200 && status != 201 ? resolve(null) : resolve({
                        token: response.id,
                        payment_method_id: data.paymentMethodId
                    });
                }
            )
        }); 
    }

    processPaymentData(payload) {
        return new Promise((resolve, reject) => {
            console.warn('processPaymentData ' + payload, payload.token);
            payload.token ? resolve(payload) : resolve({payment_method_id: payload});
        });
	}
}