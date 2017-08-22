import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    GET_HIGHLIGHTS: type('[Products] Get Highlights'),
    GET_HIGHLIGHTS_SUCCESS: type('[Products] Get Highlights Success'),
    GET_HIGHLIGHTS_FAILURE: type('[Products] Get Highlights Failure'),
    GET_DETAIL: type('[Products] Get Detail'),
    GET_DETAIL_SUCCESS: type('[Products] Get Detail Success'),
    GET_DETAIL_FAILURE: type('[Products] Get Detail Failure'),
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

export class GetDetail implements Action {
  type = ActionTypes.GET_DETAIL;
  constructor(public payload: any) { }
}

export class GetDetailFailure implements Action {
  type = ActionTypes.GET_DETAIL_FAILURE;
  constructor(public payload: any) { }
}

export class GetDetailSuccess implements Action {
  type = ActionTypes.GET_DETAIL_SUCCESS;
  constructor(public payload: any) { }
}

export type Actions = GetHighlights | GetHighlightsFailure | GetHighlightsSuccess |
                      GetDetail | GetDetailFailure | GetDetailSuccess;