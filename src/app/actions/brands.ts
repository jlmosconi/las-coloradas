import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    GET_ALL: type('[Brands] Get All'),
    GET_ALL_FAILURE: type('[Brands] Get All Failure'),
    GET_ALL_SUCCESS: type('[Brands] Get All Success')
};

export class GetAllBrands implements Action {
    readonly type = ActionTypes.GET_ALL;
    constructor(public payload?: any) { }
}

export class GetAllBrandsFailure implements Action {
    readonly type = ActionTypes.GET_ALL_FAILURE;
    constructor(public payload?: any) { }
}

export class GetAllBrandsSuccess implements Action {
    readonly type = ActionTypes.GET_ALL_SUCCESS;
    constructor(public payload?: any) { }
}

export type Actions 
= GetAllBrands
| GetAllBrandsFailure
| GetAllBrandsSuccess;
