import * as admin from 'firebase-admin';

export const savePayment = (payment:any, userID:any, paymentID:any) => {
    return new Promise((resolve, reject)=>{
        admin.database().ref('payments/' + userID + '/' + paymentID).set(payment)
            .then(snapshot => {
                resolve(true);
            });
    });
};