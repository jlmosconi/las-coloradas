import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import {
  ActionTypes, AuthError
} from '../actions/auth';
import { GetUser, NotAuthenticated } from '../actions/user';
import { OpenLogin } from '../actions/layout';
import { AuthService } from '../services/auth/service';
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
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService
  ) {}

      @Effect()
        SocialLogin$:  Observable<Action> = this.action$
          .ofType(ActionTypes.SOCIAL_LOGIN)
          .map(toPayload)
          .switchMap(payload => {
            return Observable.fromPromise(this.authService.socialLogin(payload));
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
            return Observable.fromPromise(this.authService.emailLogin(payload));
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
            return Observable.fromPromise(this.authService.linkAccountWithEmailAndPassword(payload));
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
            return Observable.fromPromise(this.authService.logOut());
          })
          .map(authData => {
            return new NotAuthenticated();
          })
          .catch(err => {
            return of(new AuthError({error: err}));
          });
}