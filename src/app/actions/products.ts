import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    GET_HIGHLIGHTS: type('[Products] Get Highlights'),
    GET_HIGHLIGHTS_SUCCESS: type('[Products] Get Highlights Success'),
    GET_HIGHLIGHTS_FAILURE: type('[Products] Get Highlights Failure')
};

export class GetHighlights implements Action {
  type = ActionTypes.GET_HIGHLIGHTS;
  constructor(public payload: any) { }
}

export class GetHighlightsFailure implements Action {
  type = ActionTypes.GET_HIGHLIGHTS_FAILURE;
  constructor(public payload: any) { }
}

export class GetHighlightsSuccess implements Action {
  type = ActionTypes.GET_HIGHLIGHTS_SUCCESS;
  constructor(public payload: any) { }
}

export type Actions = GetHighlights | GetHighlightsFailure | GetHighlightsSuccess;