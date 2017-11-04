import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    GET_USER: type('[User] Get user'),
    AUTHENTICATED: type('[User] Authenticated'),
    NOT_AUTHENTICATED: type('[User] Not Authenticated')
};

export class GetUser implements Action {
    readonly type = ActionTypes.GET_USER;
    constructor(public payload?: any) {}
}
export class Authenticated implements Action {
    readonly type = ActionTypes.AUTHENTICATED;
    constructor(public payload?: any) {}
}
export class NotAuthenticated implements Action {
    readonly type = ActionTypes.NOT_AUTHENTICATED;
    constructor(public payload?: any) {}
}

export type Actions
= GetUser 
| Authenticated
| NotAuthenticated