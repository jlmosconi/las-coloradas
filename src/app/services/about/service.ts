import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AboutService {
    constructor(private db: AngularFireDatabase) { }

    getData() {
        return this.db.object('about').valueChanges();
    }
}