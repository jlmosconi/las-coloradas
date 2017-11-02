import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

    getUserState() {
        return this.afAuth.authState;
    }

    getUserData() {
        return new Promise((resolve, reject) => {
            this.afAuth.authState.subscribe(state => {
                if(state) {
                    this.db.object(`/users/${state.uid}`).valueChanges().subscribe(userData => {
                        resolve(userData)
                    })
                }else {
                    resolve();
                }
            })
        });
    }
    // getUserData(uid) {
    //     return new Promise((resolve, reject) => {
    //         this.db.object(`/users/${uid}`).valueChanges().subscribe(userData => {
    //                                 resolve(userData)
    //                             })
    //     });
    // }
    socialLogin(providerId) {
        return new Promise((resolve, reject) => {
            const provider = this.getProviderForProviderId(providerId);
            this.afAuth.auth.signInWithPopup(provider)
                .then(result => {
                    this.createUserIfNotExist(result.user)
                        .then(user => {
                            resolve(user);
                        })
                })
                .catch(error => {
                    console.warn(error);
                    if (error.code === 'auth/account-exists-with-different-credential') {
                        this.accountExistsWithDifferentCredential(error)
                            .then(_ => {
                                resolve();
                            })
                            .catch(err => {
                                reject(err);
                            })
                    } else {
                        reject();
                    }
                    
                });
        });
    }

    emailLogin(data) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password)
                .then(user => {
                    this.createUserIfNotExist(user).then(user => {
                        resolve(user);
                })
            })
            .catch(error => {
                error.email = data.email;
                if(error.code === 'auth/wrong-password' && error.message === 'The password is invalid or the user does not have a password.') {
                    this.accountExistsWithDifferentCredential(error)
                        .then(_ => {
                            resolve();
                        });
                } else if(error.code === 'auth/user-not-found') {
                    this.emailRegister(data)
                        .then(_ => {
                            resolve();
                        })
                        .catch(_ => {
                            reject();
                        })
                } else {
                    reject();
                }
                
            });
        });
    }

    emailRegister(data) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
                .then(user => {
                    this.createUserIfNotExist(user)
                        .then(user => {
                            resolve();
                        })
                 })
                .catch(error => {
                    if (error.code === 'auth/account-exists-with-different-credential') {
                        this.accountExistsWithDifferentCredential(error)
                            .then(_ => {
                                resolve();
                            });
                    } else {
                        reject();
                    }
                    
                });
        })
    }

    getProviderForProviderId(provider) {
        switch (provider) {
            case('google.com'):
              return new firebase.auth.GoogleAuthProvider();
            case('facebook.com'):
              return new firebase.auth.FacebookAuthProvider();
          }
    }

    createUserIfNotExist(user) {
        return new Promise((resolve, reject) => {
            let userData = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            }

            firebase.database().ref('/users/' + user.uid).once('value')
                .then((snapshot) => {
                    let value = snapshot.val();
                    if(!value) {
                        this.db.object(`users/${user.uid}`).set(userData)
                            .then(_ => {
                                resolve(userData);
                            })
                    } else {
                        resolve(value);
                    }
                });
        });
    }

    accountExistsWithDifferentCredential(err, password?) {
        return new Promise((resolve, reject) => {
            let pendingCred = err.credential;
            let email = err.email;
            this.afAuth.auth.fetchProvidersForEmail(email)
                .then(providers => {
                    if (providers[0] === 'password') {
                        
                        // Asks the user his password.
                        // In real scenario, you should handle this asynchronously.
                        //     var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
                        //     this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function(user) {
                        //     // Step 4a.
                        //     return user.link(pendingCred);
                        //     }).then(function() {
                        //     // Facebook account successfully linked to the existing Firebase user.
                        //     goToApp();
                        // });
                        // return;
                        
                        
                        
                        // this.afAuth.auth.signInWithEmailAndPassword(email, password)
                        //     .then(user => {
                        //         this.afAuth.auth.currentUser.linkWithCredential(pendingCred)
                        //             .then(result => {
                        //                 resolve(result);
                        //             });
                        //     });

                        reject({type: providers[0], email: email, pendingCred: pendingCred });
                        return;
                    }
                
                    let provider = this.getProviderForProviderId(providers[0]);
                    this.afAuth.auth.signInWithPopup(provider)
                        .then(result => {
                            this.afAuth.auth.currentUser.linkWithCredential(pendingCred)
                                .then(result => {
                                    resolve(result);
                                });
                        });
            });
        });
    }

    linkAccountWithEmailAndPassword(data) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(data.authValue.email, data.authValue.password)
                .then(user => {
                    this.afAuth.auth.currentUser.linkWithCredential(data.pendingCred)
                        .then(result => {
                            resolve(result);
                        });
                });
        });
    }

    logOut () {
        return this.afAuth.auth.signOut();
    }
}
