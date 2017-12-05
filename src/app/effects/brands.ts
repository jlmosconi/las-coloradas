import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { ActionTypes, GetAllBrandsSuccess } from '../actions/brands';
import { BrandsService } from '../services/brands/service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

@Injectable()
export class BrandsEffects {
    constructor(
        private action$: Actions, 
        private store: Store<any>,
        private brandsService: BrandsService
    ) {}

    @Effect() 
        GetAll: Observable<{}> = this.action$
        .ofType(ActionTypes.GET_ALL)
        .switchMap(payload => {
            return this.brandsService.getAll();
        })
        .map(result => {
            return new GetAllBrandsSuccess(result);
        })
        .catch(err => {
            return of({ type: ActionTypes.GET_ALL_FAILURE, payload: err });
        });
}