import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { ActionTypes as contactActions } from '../actions/contact'
import { ActionTypes as productsActions } from '../actions/products';
import { ActionTypes as checkoutActions } from '../actions/checkout';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToastrEffects {
    constructor(
        private action$: Actions,
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

    @Effect({dispatch: false})
        savePaymentDataSuccess: Observable<{}> = this.action$
            .ofType(checkoutActions.PROCESS_CARD_DATA_SUCCESS)
            .do(() => {
                this.toastr.open('La tarjeta fue aceptada', null, {
                    duration: 2000,
                    extraClasses: ['success']
                });
            })

    @Effect({dispatch: false})
        savePaymentDataFailure: Observable<{}> = this.action$
            .ofType(checkoutActions.PROCESS_CARD_DATA_FAILURE)
            .do(() => {
                this.toastr.open('La tarjeta fue rechazada', null, {
                    duration: 2000,
                    extraClasses: ['danger']
                });
            })

    @Effect({dispatch: false})
        confirmPaymentSuccess: Observable<{}> = this.action$
            .ofType(checkoutActions.CONFIRM_PAYMENT_SUCCESS)
            .do(() => {
                this.toastr.open('Pago realizado con éxito', null, {
                    duration: 2000,
                    extraClasses: ['success']
                });
            })

    @Effect({dispatch: false})
        confirmPaymentFailure: Observable<{}> = this.action$
            .ofType(checkoutActions.CONFIRM_PAYMENT_FAILURE)
            .do(() => {
                this.toastr.open('Error!', null, {
                    duration: 2000,
                    extraClasses: ['danger']
                });
            })
       
}