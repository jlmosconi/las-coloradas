import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import {
  ActionTypes, Authenticated, NotAuthenticated
} from '../actions/user';
import { UserService } from '../services/user/service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Injectable()
export class UserEffects {
  constructor(
    private action$: Actions,
    private userService: UserService
  ) {}
    @Effect() 
      GetUser$: Observable<Action> = this.action$
      .ofType(ActionTypes.GET_USER)
      .switchMap(() => 
        this.userService.getUserState()
          .switchMap(result => {
            if(result) {
              return this.userService.getUserData(result.uid).map(user => {
                return new Authenticated(user);
              })
            } else {
              return of(new NotAuthenticated());
            }
          })
      )
}