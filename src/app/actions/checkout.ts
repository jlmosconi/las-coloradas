import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    MOVE_TO_STEP: type('[Checkout] Move To Step'),
    SAVE_SHIPPING: type('[Checkout] Save Shipping'),
    SAVE_SHIPPING_FAILURE: type('[Checkout] Save Shipping Failure'),
    SAVE_SHIPPING_SUCCESS: type('[Checkout] Save Shipping Success'),
    SAVE_PAYMENT: type('[Checkout] Save Payment'),
    SAVE_PAYMENT_FAILURE: type('[Checkout] Save Payment Failure'),
    SAVE_PAYMENT_SUCCESS: type('[Checkout] Save Payment Success'),
};

export class MoveToStep implements Action {
    readonly type = ActionTypes.MOVE_TO_STEP;
    constructor(public payload?: any) { }
}

export class SaveShipping implements Action {
    readonly type = ActionTypes.SAVE_SHIPPING;
    constructor(public payload: any) { }
}

export class SaveShippingFailure implements Action {
    readonly type = ActionTypes.SAVE_SHIPPING_FAILURE;
    constructor(public payload?: any) { }
}

export class SaveShippingSuccess implements Action {
    readonly type = ActionTypes.SAVE_SHIPPING_SUCCESS;
    constructor(public payload?: any) { }
}

export class SavePayment implements Action {
    readonly type = ActionTypes.SAVE_PAYMENT;
    constructor(public payload: any) { }
}

export class SavePaymentFailure implements Action {
    readonly type = ActionTypes.SAVE_PAYMENT_FAILURE;
    constructor(public payload?: any) { }
}

export class SavePaymentSuccess implements Action {
    readonly type = ActionTypes.SAVE_PAYMENT_SUCCESS;
    constructor(public payload?: any) { }
}

export type Actions 
= MoveToStep
| SaveShipping | SaveShippingFailure | SaveShippingSuccess
| SavePayment | SavePaymentFailure | SavePaymentSuccess;
