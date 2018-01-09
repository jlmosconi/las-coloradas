import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { ActionTypes, SaveShippingSuccess, SaveShippingFailure, SavePaymentSuccess, SavePaymentFailure, SavePaymentData, SavePaymentDataSuccess, SavePaymentDataFailure, ProcessCardData, ProcessCardDataSuccess, ProcessCardDataFailure, ProcessPaymentData } from '../actions/checkout';
import { UserService } from '../services/user/service';
import { CheckoutService } from '../services/checkout/service';
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
        private checkoutService: CheckoutService
    ) {}

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

    @Effect()
        SavePayment$: Observable<Action> = this.action$
            .ofType(ActionTypes.SAVE_PAYMENT)
                .map(toPayload)
                .switchMap(payload => {
                    return this.userService.savePayment(payload)
                })
                .map(response => {
                    return response ? new SavePaymentSuccess() : new SavePaymentFailure();
                })
                .catch(err => {
                    return of(new SavePaymentFailure());
                });

    @Effect()
        ProcessCardData$: Observable<Action> = this.action$
            .ofType(ActionTypes.PROCESS_CARD_DATA)
                .map(toPayload)
                .switchMap(payload => {
                    return this.checkoutService.processCardData(payload)
                })
                .switchMap(response => {
                    console.warn(response);
                    return response ? ([ 
                        new ProcessCardDataSuccess(response), 
                        new ProcessPaymentData(response)
                    ]) : 
                    [
                        new ProcessPaymentData({}),
                        new ProcessCardDataFailure()
                    ];
                })
                .catch(err => {
                    return of(new ProcessCardDataFailure());
                });

    @Effect()
        ProcessPaymentData$: Observable<Action> = this.action$
            .ofType(ActionTypes.PROCESS_PAYMENT_DATA)
                .map(toPayload)
                .switchMap(payload => {
                    return this.checkoutService.processPaymentData(payload)
                })
                .map(response => {
                    return new SavePaymentData(response)
                })
                .catch(err => {
                    return of(new SavePaymentDataFailure());
                });

    @Effect()
        SavePaymentData$: Observable<Action> = this.action$
            .ofType(ActionTypes.SAVE_PAYMENT_DATA)
                .map(toPayload)
                .switchMap(payload => {
                    console.warn(payload);
                    return this.userService.savePaymentData(payload);
                })
                .map(response => {
                    return new SavePaymentDataSuccess();
                })
                .catch(err => {
                    return of(new SavePaymentDataFailure());
                });
}