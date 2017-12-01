import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { ActionTypes, SaveShippingSuccess, SaveShippingFailure } from '../actions/checkout';
import { UserService } from '../services/user/service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

@Injectable()
export class CheckoutEffects {
    constructor(
        private action$: Actions, 
        private store: Store<any>,
        private userService: UserService,
    ) {}


  @Effect()
    saveShipping$: Observable<Action> = this.action$
        .ofType(ActionTypes.SAVE_SHIPPING)
        .map(toPayload)
        .switchMap(payload => {
        return this.userService.saveShipping(payload)
        })
        .map(response => {
        return response ? new SaveShippingSuccess() : new SaveShippingFailure();
        })
        .catch(err => {
        return of(new SaveShippingFailure());
        });
}