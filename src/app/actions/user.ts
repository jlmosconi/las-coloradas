import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    GET_USER: type('[User] Get User'),
    AUTHENTICATED: type('[User] Authenticated'),
    NOT_AUTHENTICATED: type('[User] Not Authenticated'),
    GET_USER_CART: type('[User] Get User Cart'),
    GET_USER_CART_FAILURE: type('[User] Get User Cart Failure'),
    GET_USER_CART_SUCCESS: type('[User] Get User Cart Success'),
    GET_USER_FAVORITES: type('[User] Get User Favorites'),
    GET_USER_FAVORITES_FAILURE: type('[User] Get User Favorites Failure'),
    GET_USER_FAVORITES_SUCCESS: type('[User] Get User Favorites Success')
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

export class GetUserCart implements Action {
    readonly type = ActionTypes.GET_USER_CART;
    constructor(public payload?: any) {}
}

export class GetUserCartFailure implements Action {
    readonly type = ActionTypes.GET_USER_CART_FAILURE;
    constructor(public payload?: any) {}
}

export class GetUserCartSuccess implements Action {
    readonly type = ActionTypes.GET_USER_CART_SUCCESS;
    constructor(public payload?: any) {}
}

export class GetUserFavorites implements Action {
    readonly type = ActionTypes.GET_USER_FAVORITES;
    constructor(public payload?: any) {}
}

export class GetUserFavoritesFailure implements Action {
    readonly type = ActionTypes.GET_USER_FAVORITES_FAILURE;
    constructor(public payload?: any) {}
}

export class GetUserFavoritesSuccess implements Action {
    readonly type = ActionTypes.GET_USER_FAVORITES_SUCCESS;
    constructor(public payload?: any) {}
}

export type Actions
= GetUser 
| Authenticated
| NotAuthenticated
| GetUserCart | GetUserCartFailure | GetUserCartSuccess
| GetUserFavorites | GetUserCartFailure | GetUserCartSuccess
