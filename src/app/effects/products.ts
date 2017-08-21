import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  ActionTypes, GetHighlights, GetHighlightsFailure, GetHighlightsSuccess
} from '../actions/products';
import { ProductsQueries } from '../services/products/queries';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductsEffects {
  constructor(
    private action$: Actions,
    private productsQueries: ProductsQueries
  ) {}

  @Effect()
  GetHighlights: Observable<{}> = this.action$
    .ofType(ActionTypes.GET_HIGHLIGHTS)
    .switchMap(() => {
      return this.productsQueries.getHighlightProducts()
        .map((result) => {
          return new GetHighlightsSuccess(
            result
          );
        })
        .catch((err) => {
          console.log(err);
          return Observable.of({ type: ActionTypes.GET_HIGHLIGHTS_FAILURE, payload: err });
        });
    });
}