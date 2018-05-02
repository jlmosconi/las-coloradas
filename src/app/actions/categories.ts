import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    GET_CATEGORIES: type('[Categories] Get Categories'),
    GET_CATEGORIES_FAILURE: type('[Categories] Get Categories Failure'),
    GET_CATEGORIES_SUCCESS: type('[Categories] Get Categories Success')
};

export class GetCategories implements Action {
    readonly type = ActionTypes.GET_CATEGORIES;
    constructor(public payload?: any) {}
}

export class GetCategoriesFailure implements Action {
    readonly type = ActionTypes.GET_CATEGORIES_FAILURE;
    constructor(public payload?: any) {}
}

export class GetCategoriesSuccess implements Action {
    readonly type = ActionTypes.GET_CATEGORIES_SUCCESS;
    constructor(public payload?: any) {}
}

export type Actions
= GetCategories | GetCategoriesFailure | GetCategoriesSuccess;
