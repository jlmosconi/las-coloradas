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
    ADD_TO_FAVORITES_SUCCESS: type('[Products] Add To Favorites Success'),
    REMOVE_TO_FAVORITES: type('[Products] Remove To Favorites'),
    REMOVE_TO_FAVORITES_FAILURE: type('[Products] Remove To Favorites Failure'),
    REMOVE_TO_FAVORITES_SUCCESS: type('[Products] Remove To Favorites Success'),
    ADD_TO_CART: type('[Products] Add To Cart'),
    ADD_TO_CART_FAILURE: type('[Products] Add To Cart Failure'),
    ADD_TO_CART_SUCCESS: type('[Products] Add To Cart Success'),
    REMOVE_TO_CART: type('[Products] Remove To Cart'),
    REMOVE_TO_CART_FAILURE: type('[Products] Remove To Cart Failure'),
    REMOVE_TO_CART_SUCCESS: type('[Products] Remove To Cart Success'),
    QUICK_SEARCH_PRODUCTS: type('[Products] Quick Search Products'),
    QUICK_SEARCH_PRODUCTS_SUCCESS: type('[Products] Quick Search Products Success'),
    QUICK_SEARCH_PRODUCTS_FAILURE: type('[Products] Quick Search Products Failure'),
    CLEAR_QUICK_SEARCH_PRODUCTS: type('[Products] Clear Quick Search Products'),
    SEARCH_PRODUCTS: type('[Products] Search Products'),
    SEARCH_PRODUCTS_SUCCESS: type('[Products] Search Products Success'),
    SEARCH_PRODUCTS_FAILURE: type('[Products] Search Products Failure'),
    CLEAR_FILTERED_PRODUCTS: type('[Products] Clear Filtered Products'),
    CLEAR_SEARCH_LIST: type('[Products] Clear Search List'),
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

export class RemoveToFavorites implements Action {
  readonly type = ActionTypes.REMOVE_TO_FAVORITES;
  constructor(public payload: any) { }
}

export class RemoveToFavoritesFailure implements Action {
  readonly type = ActionTypes.REMOVE_TO_FAVORITES_FAILURE;
  constructor(public payload?: any) { }
}

export class RemoveToFavoritesSuccess implements Action {
  readonly type = ActionTypes.REMOVE_TO_FAVORITES_SUCCESS;
  constructor(public payload?: any) { }
}

export class AddToCart implements Action {
  readonly type = ActionTypes.ADD_TO_CART;
  constructor(public payload: any) { }
}

export class AddToCartFailure implements Action {
  readonly type = ActionTypes.ADD_TO_CART_FAILURE;
  constructor(public payload?: any) { }
}

export class AddToCartSuccess implements Action {
  readonly type = ActionTypes.ADD_TO_CART_SUCCESS;
  constructor(public payload?: any) { }
}

export class RemoveToCart implements Action {
  readonly type = ActionTypes.REMOVE_TO_CART;
  constructor(public payload: any) { }
}

export class RemoveToCartFailure implements Action {
  readonly type = ActionTypes.REMOVE_TO_CART_FAILURE;
  constructor(public payload?: any) { }
}

export class RemoveToCartSuccess implements Action {
  readonly type = ActionTypes.REMOVE_TO_CART_SUCCESS;
  constructor(public payload?: any) { }
}


export class QuickSearchProducts implements Action {
  readonly type = ActionTypes.QUICK_SEARCH_PRODUCTS;
  constructor(public payload: any) { }
}

export class QuickSearchProductsFailure implements Action {
  readonly type = ActionTypes.QUICK_SEARCH_PRODUCTS_FAILURE;
  constructor(public payload: any) { }
}

export class QuickSearchProductsSuccess implements Action {
  readonly type = ActionTypes.QUICK_SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload: any) { }
}

export class ClearQuickSearchProducts implements Action {
  readonly type = ActionTypes.CLEAR_QUICK_SEARCH_PRODUCTS;
  constructor(public payload?: any) { }
}

export class SearchProducts implements Action {
  readonly type = ActionTypes.SEARCH_PRODUCTS;
  constructor(public payload: any) { }
}

export class SearchProductsFailure implements Action {
  readonly type = ActionTypes.SEARCH_PRODUCTS_FAILURE;
  constructor(public payload: any) { }
}

export class SearchProductsSuccess implements Action {
  readonly type = ActionTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload: any) { }
}

export class ClearFilteredProducts implements Action {
  readonly type = ActionTypes.CLEAR_FILTERED_PRODUCTS;
  constructor(public payload?: any) { }
}

export class ClearSearchList implements Action {
  readonly type = ActionTypes.CLEAR_SEARCH_LIST;
  constructor(public payload?: any) { }
}

export type Actions 
= GetHighlights | GetHighlightsFailure | GetHighlightsSuccess
| GetLatest | GetLatestFailure | GetLatestSuccess
| GetDetail | GetDetailFailure | GetDetailSuccess
| AddToFavorites | AddToFavoritesFailure | AddToFavoritesSuccess
| RemoveToFavorites | RemoveToFavoritesFailure | RemoveToFavoritesSuccess
| AddToCart | AddToCartFailure | AddToCartSuccess
| RemoveToCart | RemoveToCartFailure | RemoveToCartSuccess
| QuickSearchProducts | QuickSearchProductsFailure | QuickSearchProductsSuccess
| SearchProducts | SearchProductsFailure | SearchProductsSuccess
| ClearFilteredProducts | ClearQuickSearchProducts | ClearSearchList;