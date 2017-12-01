import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { ActionTypes, SaveShippingSuccess, SaveShippingFailure, GetShippingSuccess } from '../actions/checkout';
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
        GetUserShipping$: Observable<Action> = this.action$
            .ofType(ActionTypes.GET_SHIPPING)
            .switchMap(() => 
                this.userService.getUserState()
                .switchMap(result => {
                    let uid = result ? result.uid : null
                    return this.userService.getUserShipping(uid)
                })
                .map(result => {
                    return new GetShippingSuccess(result);
                })
            )

    @Effect()
        SaveShipping$: Observable<Action> = this.action$
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