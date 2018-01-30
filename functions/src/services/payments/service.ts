import * as admin from 'firebase-admin';

export const savePayment = (payment:any, userID:any) => {
    return new Promise((resolve, reject)=>{
        admin.database().ref('payments/' + userID).push(payment)
            .then(snapshot => {
                resolve(true);
            });
    });
};