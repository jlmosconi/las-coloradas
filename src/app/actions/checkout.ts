import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    MOVE_TO_STEP: type('[Checkout] Move To Step'),
    GET_SHIPPING: type('[Checkout] Get Shipping'),
    GET_SHIPPING_FAILURE: type('[Checkout] Get Shipping Failure'),
    GET_SHIPPING_SUCCESS: type('[Checkout] Get Shipping Success'),
    SAVE_SHIPPING: type('[Checkout] Save Shipping'),
    SAVE_SHIPPING_FAILURE: type('[Checkout] Save Shipping Failure'),
    SAVE_SHIPPING_SUCCESS: type('[Checkout] Save Shipping Success'),
};

export class MoveToStep implements Action {
    readonly type = ActionTypes.MOVE_TO_STEP;
    constructor(public payload?: any) { }
}

export class GetShipping implements Action {
    readonly type = ActionTypes.GET_SHIPPING;
    constructor(public payload?: any) { }
}

export class GetShippingFailure implements Action {
    readonly type = ActionTypes.GET_SHIPPING_FAILURE;
    constructor(public payload?: any) { }
}

export class GetShippingSuccess implements Action {
    readonly type = ActionTypes.GET_SHIPPING_SUCCESS;
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

export type Actions 
= MoveToStep
| GetShipping | GetShippingFailure | GetShippingSuccess
| SaveShipping | SaveShippingFailure | SaveShippingSuccess;
