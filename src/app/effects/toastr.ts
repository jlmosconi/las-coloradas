import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { ActionTypes as contactActions } from '../actions/contact'
import { ActionTypes as productsActions } from '../actions/products';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Injectable()
export class ToastrEffects {
    constructor(
        private action$: Actions, 
        private store: Store<any>,
        public toastr: MatSnackBar
    ) {}

    @Effect({dispatch: false})
      sendMessageSuccess: Observable<{}> = this.action$
        .ofType(contactActions.SEND_MESSAGE_SUCCESS)
        .do(() => {
            this.toastr.open('Mensaje enviado correctamente', null, {
                duration: 2000,
                extraClasses: ['success']
            });
        }) 

    @Effect({dispatch: false})
        addFavoriteSuccess: Observable<{}> = this.action$
          .ofType(productsActions.ADD_TO_FAVORITES_SUCCESS)
          .do(() => {
              this.toastr.open('Producto añadido a favoritos', null, {
                  duration: 2000,
                  extraClasses: ['success']
              });
          })
          
    @Effect({dispatch: false})
          addToCartSuccess: Observable<{}> = this.action$
            .ofType(productsActions.ADD_TO_CART_SUCCESS)
            .do(() => {
                this.toastr.open('Producto añadido al carrito', null, {
                    duration: 2000,
                    // horizontalPosition: 'right',
                    // verticalPosition: 'top',
                    extraClasses: ['success']
                });
            })
       
}