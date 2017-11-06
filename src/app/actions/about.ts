import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    GET_DATA: type('[About] Get Data'),
    GET_DATA_FAILURE: type('[About] Get Data Failure'),
    GET_DATA_SUCCESS: type('[About] Get Data Success'),
};

export class GetData implements Action {
    readonly type = ActionTypes.GET_DATA;
    constructor(public payload?: any) { }
}

export class GetDataFailure implements Action {
    readonly type = ActionTypes.GET_DATA_FAILURE;
    constructor(public payload?: any) { }
}

export class GetDataSuccess implements Action {
    readonly type = ActionTypes.GET_DATA_SUCCESS;
    constructor(public payload?: any) { }
}

export type Actions 
= GetData 
| GetDataFailure 
| GetDataSuccess;