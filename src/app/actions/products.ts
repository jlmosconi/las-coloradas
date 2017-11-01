import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
    GET_HIGHLIGHTS: type('[Products] Get Highlights'),
    GET_HIGHLIGHTS_SUCCESS: type('[Products] Get Highlights Success'),
    GET_HIGHLIGHTS_FAILURE: type('[Products] Get Highlights Failure'),
    GET_LATEST: type('[Products] Get Latest'),
    GET_LATEST_SUCCESS: type('[Products] Get Latest Success'),
    GET_LATEST_FAILURE: type('[Products] Get Latest Failure'),
    GET_DETAIL: type('[Products] Get Detail'),
    GET_DETAIL_SUCCESS: type('[Products] Get Detail Success'),
    GET_DETAIL_FAILURE: type('[Products] Get Detail Failure'),
    ADD_TO_FAVORITES: type('[Products] Add To Favorites'),
    ADD_TO_FAVORITES_FAILURE: type('[Products] Add To Favorites Failure'),
    ADD_TO_FAVORITES_SUCCESS: type('[Products] Add To Favorites Success')
};

export class GetHighlights implements Action {
  readonly type = ActionTypes.GET_HIGHLIGHTS;
  constructor(public payload: any) { }
}

export class GetHighlightsFailure implements Action {
  readonly type = ActionTypes.GET_HIGHLIGHTS_FAILURE;
  constructor(public payload: any) { }
}

export class GetHighlightsSuccess implements Action {
  readonly type = ActionTypes.GET_HIGHLIGHTS_SUCCESS;
  constructor(public payload: any) { }
}

export class GetLatest implements Action {
  readonly type = ActionTypes.GET_LATEST;
  constructor(public payload: any) { }
}

export class GetLatestFailure implements Action {
  readonly type = ActionTypes.GET_LATEST_FAILURE;
  constructor(public payload: any) { }
}

export class GetLatestSuccess implements Action {
  readonly type = ActionTypes.GET_LATEST_SUCCESS;
  constructor(public payload: any) { }
}

export class GetDetail implements Action {
  readonly type = ActionTypes.GET_DETAIL;
  constructor(public payload: any) { }
}

export class GetDetailFailure implements Action {
  readonly type = ActionTypes.GET_DETAIL_FAILURE;
  constructor(public payload: any) { }
}

export class GetDetailSuccess implements Action {
  readonly type = ActionTypes.GET_DETAIL_SUCCESS;
  constructor(public payload: any) { }
}

export class AddToFavorites implements Action {
  readonly type = ActionTypes.ADD_TO_FAVORITES;
  constructor(public payload: any) { }
}

export class AddToFavoritesFailure implements Action {
  readonly type = ActionTypes.ADD_TO_FAVORITES_FAILURE;
  constructor(public payload?: any) { }
}

export class AddToFavoritesSuccess implements Action {
  readonly type = ActionTypes.ADD_TO_FAVORITES_SUCCESS;
  constructor(public payload?: any) { }
}

export type Actions = 
GetHighlights | GetHighlightsFailure | GetHighlightsSuccess |
GetLatest | GetLatestFailure | GetLatestSuccess |
GetDetail | GetDetailFailure | GetDetailSuccess |
AddToFavorites | AddToFavoritesFailure | AddToFavoritesSuccess;