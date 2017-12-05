import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class BrandsService {
    constructor(private db: AngularFireDatabase) { }

    getAll() {
        return this.db.list('brands').valueChanges();
    }
}