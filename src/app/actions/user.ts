import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    GET_USER: type('[Auth] Get user'),
    AUTHENTICATED: type('[Auth] Authenticated'),
    NOT_AUTHENTICATED: type('[Auth] Not Authenticated'),
    SOCIAL_LOGIN: type('[Auth] Social login attempt'),
    EMAIL_LOGIN: type('[Auth] Email login attempt'),
    SET_PASSWORD: type('[Auth] Set Password'),
    LOGOUT: type('[Auth] Logout'),
    AUTH_ERROR: type('[Auth] Error')
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
export class AuthError implements Action {
    readonly type = ActionTypes.AUTH_ERROR;
    constructor(public payload?: any) {}
}

export class SocialLogin implements Action {
    readonly type = ActionTypes.SOCIAL_LOGIN;
    constructor(public payload?: any) {}
}

export class SetPassword implements Action {
    readonly type = ActionTypes.SET_PASSWORD;
    constructor(public payload?: any) {}
}

export class EmailLogin implements Action {
    readonly type = ActionTypes.EMAIL_LOGIN;
    constructor(public payload?: any) {}
}

export class Logout implements Action {
    readonly type = ActionTypes.LOGOUT;
    constructor(public payload?: any) {}
}

export type Actions
= GetUser 
| Authenticated
| NotAuthenticated
| SocialLogin
| EmailLogin
| SetPassword
| AuthError
| Logout;