import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import {
  ActionTypes, Authenticated, NotAuthenticated,
  GetUserCartFailure, GetUserCartSuccess
} from '../actions/user';
import { UserService } from '../services/user/service';
import { ProductsService } from '../services/products/service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserEffects {
  constructor(
    private action$: Actions,
    private userService: UserService,
    private productsService: ProductsService
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
      GetUserCart$: Observable<Action> = this.action$
      .ofType(ActionTypes.GET_USER_CART)
      .switchMap(() => 
        this.userService.getUserState()
        .switchMap(result => {
          let uid = result ? result.uid : null
          return this.userService.getUserCart(uid)
        })
        .switchMap(cart => {
          return this.productsService.processProductsCart(cart);
        })
        .map(result => {
          return new GetUserCartSuccess(result);
        })
      )
}