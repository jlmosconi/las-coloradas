import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    MOVE_TO_STEP: type('[Checkout] Move To Step')
};

export class MoveToStep implements Action {
    readonly type = ActionTypes.MOVE_TO_STEP;
    constructor(public payload?: any) { }
}

export type Actions 
= MoveToStep;