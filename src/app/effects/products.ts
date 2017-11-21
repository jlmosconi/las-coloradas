import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import {
  ActionTypes, GetHighlights, GetHighlightsFailure, GetHighlightsSuccess,
  GetLatest, GetLatestFailure, GetLatestSuccess,
  GetRelated, GetRelatedFailure, GetRelatedSuccess,
  GetDetail, GetDetailFailure, GetDetailSuccess,
  AddToFavorites, AddToFavoritesFailure, AddToFavoritesSuccess,
  RemoveToFavorites, RemoveToFavoritesFailure, RemoveToFavoritesSuccess,
  AddToCart, AddToCartFailure, AddToCartSuccess,
  RemoveToCart, RemoveToCartFailure, RemoveToCartSuccess,
  QuickSearchProductsSuccess, QuickSearchProductsFailure,
  SearchProductsSuccess, SearchProductsFailure
} from '../actions/products';
import { ProductsService } from '../services/products/service';
import { UserService } from '../services/user/service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductsEffects {
  constructor(
    private action$: Actions,
    private productsService: ProductsService,
    private userService: UserService
  ) {}

  @Effect() 
  QuickSearchProducts$: Observable<Action> = this.action$
    .ofType(ActionTypes.QUICK_SEARCH_PRODUCTS)
    .map(toPayload)
    .switchMap(payload => {
      return this.productsService.quickSearch(payload)
        .then((result) => new QuickSearchProductsSuccess(result))
        .catch(err => {
          return new QuickSearchProductsFailure(err)
        })
    });

  @Effect() 
    SearchProducts$: Observable<Action> = this.action$
      .ofType(ActionTypes.SEARCH_PRODUCTS)
      .map(toPayload)
      .switchMap(payload => {
        return this.productsService.search(payload.query, payload.page)
          .then((result) => new SearchProductsSuccess(result))
          .catch(err => {
            return new SearchProductsFailure(err)
          })
      });

  @Effect() GetHighlights$: Observable<{}> = this.action$
    .ofType(ActionTypes.GET_HIGHLIGHTS)
    .switchMap(payload => {
      return this.productsService.getHighlightProducts();
    })
    .map(result => {
        return new GetHighlightsSuccess(result);
    })
    .catch(err => {
      return of({ type: ActionTypes.GET_HIGHLIGHTS_FAILURE, payload: err });
    });

  @Effect() GetLatest$: Observable<{}> = this.action$
    .ofType(ActionTypes.GET_LATEST)
    .switchMap(payload => {
      return this.productsService.getLatestProducts();
    })
    .map(result => {
        return new GetLatestSuccess(result);
    })
    .catch(err => {
      return of({ type: ActionTypes.GET_LATEST_FAILURE, payload: err });
    });

  @Effect() GetRelated$: Observable<{}> = this.action$
    .ofType(ActionTypes.GET_RELATED)
    .map(toPayload)
    .switchMap(payload => {
      return this.productsService.getRelatedProducts(payload.categoryId, payload.productId);
    })
    .map(result => {
        return new GetRelatedSuccess(result);
    })
    .catch(err => {
      return of({ type: ActionTypes.GET_RELATED_FAILURE, payload: err });
    });

  @Effect() GetProductDetail$: Observable<Action> = this.action$
    .ofType(ActionTypes.GET_DETAIL)
    .map(toPayload)
    .switchMap(payload => {
      return this.productsService.getDetail(payload);
    })
    .map(result => {
        return new GetDetailSuccess(result);
    })
    .catch(err => {
      return of({ type: ActionTypes.GET_DETAIL_FAILURE });
    });

  @Effect()
    addToFavorites$: Observable<Action> = this.action$
      .ofType(ActionTypes.ADD_TO_FAVORITES)
      .map(toPayload)
      .switchMap(payload => {
        return this.userService.addToFavorites(payload)
      })
      .map(response => {
        return response ? new AddToFavoritesSuccess() : new AddToFavoritesFailure();
      })
      .catch(err => {
        return of(new AddToFavoritesFailure());
      });

  @Effect()
    removeToFavorites$: Observable<Action> = this.action$
      .ofType(ActionTypes.REMOVE_TO_FAVORITES)
      .map(toPayload)
      .switchMap(payload => {
        return this.userService.removeToFavorites(payload)
      })
      .map(response => {
        return response ? new RemoveToFavoritesSuccess() : new RemoveToFavoritesFailure();
      })
      .catch(err => {
        return of(new RemoveToFavoritesFailure());
      });

  @Effect()
    addToCart$: Observable<Action> = this.action$
      .ofType(ActionTypes.ADD_TO_CART)
      .map(toPayload)
      .switchMap(payload => {
        return this.userService.addToCart(payload.id, payload.quantity)
      })
      .map(response => {
        return response ? new AddToCartSuccess() : new AddToCartFailure();
      })
      .catch(err => {
        return of(new AddToCartFailure());
      });
  
  @Effect()
    removeToCart$: Observable<Action> = this.action$
      .ofType(ActionTypes.REMOVE_TO_CART)
      .map(toPayload)
      .switchMap(payload => {
        return this.userService.removeToCart(payload)
      })
      .map(response => {
        return response ? new RemoveToCartSuccess() : new RemoveToCartFailure();
      })
      .catch(err => {
        return of(new RemoveToCartFailure());
      });
}