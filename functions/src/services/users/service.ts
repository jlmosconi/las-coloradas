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