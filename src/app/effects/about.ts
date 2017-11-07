import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { ActionTypes, GetDataSuccess } from '../actions/about';
import { AboutService } from '../services/about/service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

@Injectable()
export class AboutEffects {
    constructor(
        private action$: Actions, 
        private store: Store<any>,
        private aboutService: AboutService
    ) {}

    @Effect() 
        GetData: Observable<{}> = this.action$
        .ofType(ActionTypes.GET_DATA)
        .switchMap(payload => {
            return this.aboutService.getData();
        })
        .map(result => {
            return new GetDataSuccess(result);
        })
        .catch(err => {
            return of({ type: ActionTypes.GET_DATA_FAILURE, payload: err });
        });
}