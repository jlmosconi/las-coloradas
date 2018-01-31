import * as admin from 'firebase-admin';

export const savePayment = (payment:any, userID:any) => {
    return new Promise((resolve, reject)=>{
        payment.userID = userID;
        admin.database().ref('payments/' + payment.id).set(payment)
            .then(snapshot => {
                resolve(true);
            });
    });
};