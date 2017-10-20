import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import {
  ActionTypes, GetHighlights, GetHighlightsFailure, GetHighlightsSuccess,
  GetLatest, GetLatestFailure, GetLatestSuccess,
  GetDetail, GetDetailFailure, GetDetailSuccess
} from '../actions/products';
import { ProductsQueries } from '../services/products/queries';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsEffects {
  constructor(
    private action$: Actions,
    private productsQueries: ProductsQueries
  ) {}

  @Effect() GetHighlights$: Observable<{}> = this.action$
    .ofType(ActionTypes.GET_HIGHLIGHTS)
    .switchMap(payload => {
      return this.productsQueries.getHighlightProducts();
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
      return this.productsQueries.getLatestProducts();
    })
    .map(result => {
        return new GetLatestSuccess(result);
    })
    .catch(err => {
      return of({ type: ActionTypes.GET_LATEST_FAILURE, payload: err });
    });

  @Effect() GetProductDetail$: Observable<Action> = this.action$
    .ofType(ActionTypes.GET_DETAIL)
    .map(toPayload)
    .switchMap(payload => {
      return this.productsQueries.getDetail(payload);
    })
    .map(result => {
        return new GetDetailSuccess(result);
    })
    .catch(err => {
      return of({ type: ActionTypes.GET_DETAIL_FAILURE });
    });
}