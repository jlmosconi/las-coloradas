import * as admin from 'firebase-admin';

export const removePaymentFromJobs = (paymentID:any) => {
    return new Promise((resolve, reject)=>{
        admin.database().ref('jobs/payments/' + paymentID).set(null)
            .then(snapshot => {
                resolve(true);
            });
    });
};