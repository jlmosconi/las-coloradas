import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    OPEN_LOGIN: type('[Layout] Open Login')
};

export class OpenLogin implements Action {
    readonly type = ActionTypes.OPEN_LOGIN;
    constructor(public payload?: any) { }
}

export type Actions = OpenLogin;
