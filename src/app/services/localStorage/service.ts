import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LocalStorageService {
    public storage = new Subject();

    constructor() { }

    setItem(collection, value) {
        localStorage.setItem(collection, JSON.stringify(value));
        this.storage.next({[collection]: value});
    }

    getItem(collection) {
        //this.storage.next(JSON.parse(localStorage.getItem(collection)));
        return this.storage.map(storage => {
            return storage[collection];
        });
    }

    removeItem(collection) {
        localStorage.removeItem(collection);
        this.storage.next({[collection]: null});
    }
    
}
