import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { ActionTypes, SendMessageFailure, SendMessageSuccess } from '../actions/contact';
import { Observable } from 'rxjs/Observable';
import { ContactService } from '../services/contact/service';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactEffects {
    constructor(
        private action$: Actions, 
        private store: Store<any>,
        private contactService: ContactService
    ) {}

    @Effect()
      sendMessage: Observable<{}> = this.action$
        .ofType(ActionTypes.SEND_MESSAGE)
        .map(toPayload)
        .switchMap(payload => {
            return Observable.fromPromise(this.contactService.sendMessage(payload));
        })
        .map(data => {
            return new SendMessageSuccess();
        })
        .catch(err => {
          return of(new SendMessageFailure({error: err}));
        });
}