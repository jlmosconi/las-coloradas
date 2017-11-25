import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';

@Injectable()
export class LocalStorageService {
    public storage = new BehaviorSubject(null);

    constructor() { }

    setItem(collection, value) {
        localStorage.setItem(collection, JSON.stringify(value));
        this.storage.next({[collection]: value});
    }

    getCollection(collection) {
        this.setItem('cart', JSON.parse(localStorage.getItem(collection)));
        
        return this.storage.map(storage => {
            return storage[collection];
        });
    }

    getCollectionAsObservable(collection) {
        return this.storage.map(storage => {
            return storage[collection];
        })
    }

    removeCollection(collection) {
        localStorage.removeItem(collection);
        this.storage.next({[collection]: null});
    }

    removeItem(collection, item) {
        let coll = JSON.parse(localStorage.getItem(collection));
        delete coll[item];
        
        this.setItem(collection, coll)
    }
    
}
