import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    SAVE_SHIPPING: type('[Checkout] Save Shipping'),
    SAVE_SHIPPING_FAILURE: type('[Checkout] Save Shipping Failure'),
    SAVE_SHIPPING_SUCCESS: type('[Checkout] Save Shipping Success'),
    SAVE_PAYMENT: type('[Checkout] Save Payment'),
    SAVE_PAYMENT_FAILURE: type('[Checkout] Save Payment Failure'),
    SAVE_PAYMENT_SUCCESS: type('[Checkout] Save Payment Success'),
    PROCESS_PAYMENT_DATA: type('[Checkout] Pocess Payment Data'),
    PROCESS_PAYMENT_DATA_FAILURE: type('[Checkout] Pocess Payment Data Failure'),
    PROCESS_PAYMENT_DATA_SUCCESS: type('[Checkout] Pocess Payment Data Success'),
    PROCESS_CARD_DATA: type('[Checkout] Pocess Card Data'),
    PROCESS_CARD_DATA_FAILURE: type('[Checkout] Pocess Card Data Failure'),
    PROCESS_CARD_DATA_SUCCESS: type('[Checkout] Pocess Card Data Success'),
    SAVE_PAYMENT_DATA: type('[Checkout] Save Payment Data'),
    SAVE_PAYMENT_DATA_FAILURE: type('[Checkout] Save Payment Data Failure'),
    SAVE_PAYMENT_DATA_SUCCESS: type('[Checkout] Save Payment Data Success'),
    CONFIRM_PAYMENT: type('[Checkout] Confirm Payment'),
    CONFIRM_PAYMENT_FAILURE: type('[Checkout] Confirm Payment Failure'),
    CONFIRM_PAYMENT_SUCCESS: type('[Checkout] Confirm Payment Success'),
};

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

export class ProcessPaymentData implements Action {
    readonly type = ActionTypes.PROCESS_PAYMENT_DATA;
    constructor(public payload: any) { }
}

export class ProcessPaymentDataFailure implements Action {
    readonly type = ActionTypes.PROCESS_PAYMENT_DATA_FAILURE;
    constructor(public payload?: any) { }
}

export class ProcessPaymentDataSuccess implements Action {
    readonly type = ActionTypes.PROCESS_PAYMENT_DATA_SUCCESS;
    constructor(public payload?: any) { }
}

export class ProcessCardData implements Action {
    readonly type = ActionTypes.PROCESS_CARD_DATA;
    constructor(public payload: any) { }
}

export class ProcessCardDataFailure implements Action {
    readonly type = ActionTypes.PROCESS_CARD_DATA_FAILURE;
    constructor(public payload?: any) { }
}

export class ProcessCardDataSuccess implements Action {
    readonly type = ActionTypes.PROCESS_CARD_DATA_SUCCESS;
    constructor(public payload?: any) { }
}

export class SavePaymentData implements Action {
    readonly type = ActionTypes.SAVE_PAYMENT_DATA;
    constructor(public payload: any) { }
}

export class SavePaymentDataFailure implements Action {
    readonly type = ActionTypes.SAVE_PAYMENT_DATA_FAILURE;
    constructor(public payload?: any) { }
}

export class SavePaymentDataSuccess implements Action {
    readonly type = ActionTypes.SAVE_PAYMENT_DATA_SUCCESS;
    constructor(public payload?: any) { }
}

export class ConfirmPayment implements Action {
    readonly type = ActionTypes.CONFIRM_PAYMENT;
    constructor(public payload: any) { }
}

export class ConfirmPaymentFailure implements Action {
    readonly type = ActionTypes.CONFIRM_PAYMENT_FAILURE;
    constructor(public payload?: any) { }
}

export class ConfirmPaymentSuccess implements Action {
    readonly type = ActionTypes.CONFIRM_PAYMENT_SUCCESS;
    constructor(public payload?: any) { }
}

export type Actions 
=
| SaveShipping | SaveShippingFailure | SaveShippingSuccess
| SavePayment | SavePaymentFailure | SavePaymentSuccess
| ProcessCardData | ProcessCardDataFailure | ProcessCardDataSuccess
| ProcessPaymentData | ProcessPaymentDataFailure | ProcessPaymentDataSuccess
| SavePaymentData | SavePaymentDataFailure | SavePaymentDataSuccess
| ConfirmPayment | ConfirmPaymentFailure | ConfirmPaymentSuccess;
