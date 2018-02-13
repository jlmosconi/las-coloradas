import * as admin from 'firebase-admin';

export const getUserByID = (userID:any) => {
    return new Promise((resolve, reject)=>{
        admin.database().ref('users/' + userID)
            .once('value')
            .then(snapshot => {
                resolve(snapshot.val());
            });
    });
};

export const setUserCustomerID = (userID:any, customerID:any) => {
    return new Promise((resolve, reject)=>{
        console.log('customerID ' +  customerID);
        admin.database().ref('users/' + userID + '/customerID').set(customerID)
            .then(snapshot => {
                resolve(true);
            });
    });
};

export const setUserPaymentID = (userID:any, paymentID:any) => {
    return new Promise((resolve, reject)=>{
        admin.database().ref('users/' + userID + '/payments/' + paymentID).set(true)
            .then(snapshot => {
                resolve(true);
            });
    });
};

export const cleanCheckout = (userID:any) => {
    return new Promise((resolve, reject)=>{
        admin.database().ref('users/' + userID + '/checkout').set({
            cart: null,
            payment: 1,
            shipments: {
                id: 1
            }
        })
        .then(snapshot => {
            resolve(true);
        });
    });
};