import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ContactService {
    constructor(private db: AngularFireDatabase) { }

    sendMessage(data) {
        return new Promise((resolve, reject) => {
            this.db.list('contact').push(data)
                .then(_ => {
                    console.warn(_);
                    resolve();
                })
        })
    }
}
