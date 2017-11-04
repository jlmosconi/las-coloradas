import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import {
  ActionTypes, GetUser, Authenticated, NotAuthenticated, AuthError
} from '../actions/user';
import {
  OpenLogin
} from '../actions/layout';
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

      @Effect()
        SocialLogin$:  Observable<Action> = this.action$
          .ofType(ActionTypes.SOCIAL_LOGIN)
          .map(toPayload)
          .switchMap(payload => {
            return Observable.fromPromise(this.userService.socialLogin(payload));
          })
          .map( credential => {
              return new GetUser();
          })
        .catch(err => {
          console.warn(err);
          if(err.type == 'password') {
            return of(new OpenLogin(err));
          }else {
            return of(new AuthError({error: err}));
          }
        });

      @Effect()
        emailLogin$: Observable<Action> = this.action$
          .ofType(ActionTypes.EMAIL_LOGIN)
          .map(toPayload)
          .switchMap(payload => {
            return Observable.fromPromise(this.userService.emailLogin(payload));
          })
          .map( credential => {
              // successful login
              return new GetUser();
          })
        .catch(err => {
          return of(new AuthError({error: err}));
        });

      @Effect()
        setPassword$: Observable<Action> = this.action$
          .ofType(ActionTypes.SET_PASSWORD)
          .map(toPayload)
          .switchMap(payload => {
            return Observable.fromPromise(this.userService.linkAccountWithEmailAndPassword(payload));
          })
          .map( credential => {
              // successful login
              return new GetUser();
          })
        .catch(err => {
          return of(new AuthError({error: err}));
        });

      @Effect()
        logout: Observable<Action> = this.action$.ofType(ActionTypes.LOGOUT)
          .switchMap(payload => {
            return Observable.fromPromise(this.userService.logOut());
          })
          .map(authData => {
            return new NotAuthenticated();
          })
          .catch(err => {
            return of(new AuthError({error: err}));
          });
}