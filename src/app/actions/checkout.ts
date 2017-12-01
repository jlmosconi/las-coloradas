import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    MOVE_TO_STEP: type('[Checkout] Move To Step'),
    SAVE_SHIPPING: type('[Products] Save Shipping Cart'),
    SAVE_SHIPPING_FAILURE: type('[Products] Save Shipping Failure'),
    SAVE_SHIPPING_SUCCESS: type('[Products] Save Shipping Success'),
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

export type Actions 
= MoveToStep
| SaveShipping | SaveShippingFailure | SaveShippingSuccess;
