import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { ActionTypes, GetCategoriesSuccess } from '../actions/categories';
import { CategoriesService } from '../services/categories/service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoriesEffects {
    constructor(
        private action$: Actions, 
        private store: Store<any>,
        private categoriesService: CategoriesService
    ) {}

    @Effect() 
        GetAll: Observable<{}> = this.action$
        .ofType(ActionTypes.GET_CATEGORIES)
        .switchMap(payload => {
            return this.categoriesService.getAll();
        })
        .map(result => {
            console.warn(result);
            return new GetCategoriesSuccess(result);
        })
        .catch(err => {
            return of({ type: ActionTypes.GET_CATEGORIES_FAILURE, payload: err });
        });
}