import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { LocalStorageService } from "../localStorage/service";
import { ProductsService } from "../products/service";
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
    constructor(
        private db: AngularFireDatabase, 
        private afAuth: AngularFireAuth,
        private localStorageService: LocalStorageService,
        private productsService: ProductsService
    ) { }

    getUserState() {
        return this.afAuth.authState;
    }

    getUserData(uid) {
        return this.db.object(`/users/${uid}`).valueChanges();
    }

    getCurrentUser() {
        return firebase.auth().currentUser;
    }

    getCurrentUserId() {
        return this.getCurrentUser() ? this.getCurrentUser().uid : null;
    };

    addToFavorites(productId) {
        return new Promise((resolve, reject) => {
            let uid = this.getCurrentUserId();
            if (uid) {
                this.db.object(`/users/${uid}/favorites/${productId}`).set(true)
                    .then( _ => resolve(true))
                    .catch(err => reject())
            } else {
                resolve(false);
            }
        });
    }

    removeToFavorites(productId) {
        return new Promise((resolve, reject) => {
            let uid = this.getCurrentUserId();
            if (uid) {
                this.db.object(`/users/${uid}/favorites/${productId}`).remove()
                    .then( _ => resolve(true))
                    .catch(err => reject())
            } else {
                resolve(false);
            }
        });
    }

    addToCart(productId, quantity) {
        return new Promise((resolve, reject) => {
            let uid = this.getCurrentUserId();
            if (uid) {
                firebase.database().ref(`/users/${uid}/cart/${productId}`).once('value')
                    .then((snapshot) => { 
                        let value = snapshot.val();
                        if(!!!value || value !== quantity) {
                            this.db.object(`/users/${uid}/cart/${productId}`).set(quantity)
                                .then( _ => resolve(true))
                                .catch(err => reject())
                        } else {
                            resolve(false);
                        }
                    });
            } else {
                let cart = JSON.parse(localStorage.getItem('cart')) || {};

                if(!cart[productId] || cart[productId] !== quantity) {
                    cart[productId] = quantity;
                    // localStorage.setItem('cart', JSON.stringify(cart));
                    this.localStorageService.setItem('cart', cart);
                    resolve(true);
                } else {
                    resolve(false);
                }
            }
        });
    }

    removeToCart(productId) {
        return new Promise((resolve, reject) => {
            let uid = this.getCurrentUserId();
            if (uid) {
                this.db.object(`/users/${uid}/cart/${productId}`).remove()
                    .then( _ => resolve(true))
                    .catch(err => reject())
            } else {
                // let cart = JSON.parse(localStorage.getItem('cart'));
                // delete cart[productId];
                this.localStorageService.removeItem('cart', productId);
                resolve(true);
            }
        });
    }

    getUserCart(uid) {
        if(uid) {
            return this.db.object(`/users/${uid}/cart`).valueChanges();
        } else {
            // return this.localStorageService.storage.map(storage => {
            //     console.warn(storage);
            //     return storage['cart'];
            // })

            return this.localStorageService.getCollection('cart');
        }
    }
}
