import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    SEND_MESSAGE: type('[Contact] Send Message'),
    SEND_MESSAGE_FAILURE: type('[Contact] Send Message Failure'),
    SEND_MESSAGE_SUCCESS: type('[Contact] Send Message Success')
};

export class SendMessage implements Action {
    readonly type = ActionTypes.SEND_MESSAGE;
    constructor(public payload?: any) { }
}

export class SendMessageFailure implements Action {
    readonly type = ActionTypes.SEND_MESSAGE_FAILURE;
    constructor(public payload?: any) { }
}

export class SendMessageSuccess implements Action {
    readonly type = ActionTypes.SEND_MESSAGE_SUCCESS;
    constructor(public payload?: any) { }
}

export type Actions 
= SendMessage 
| SendMessageFailure
| SendMessageSuccess;
