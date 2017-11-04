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

    getUserData(uid) {
        return this.db.object(`/users/${uid}`).valueChanges();
    }

    getCurrentUser() {
        return firebase.auth().currentUser;
    }

    addToFavorites(productId) {
        return new Promise((resolve, reject) => {
            let uid = this.getCurrentUser() ? this.getCurrentUser().uid : null;
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
            let uid = this.getCurrentUser() ? this.getCurrentUser().uid : null;
            if (uid) {
                this.db.object(`/users/${uid}/favorites/${productId}`).remove()
                    .then( _ => resolve(true))
                    .catch(err => reject())
            } else {
                resolve(false);
            }
        });
    }
}
