import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { MatDialog } from '@angular/material';
import { ActionTypes } from '../actions/layout';
import { SocialLogin, EmailLogin, SetPassword } from '../actions/user';
import { AuthModalComponent } from '../components/widgets/auth-modal/auth-modal.component';
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
export class LayoutEffects {
    constructor(
        private action$: Actions, 
        private dialog: MatDialog,
        private store: Store<any>
    ) {}

    @Effect({dispatch: false})
      openAuthDialog: Observable<{}> = this.action$
        .ofType(ActionTypes.OPEN_LOGIN)
        .map(toPayload)
        .do((payload) => {
          let modalConfig = {
            data: {
              type: payload.type || 'login',
              email: payload.email || null,
              pendingCred: payload.pendingCred || null
            },
            panelClass: 'md-dialog-fullscreen-xs'
          };

          this.dialog.open(AuthModalComponent, modalConfig)
            .afterClosed().subscribe(result => {
              if (result) this.dispatchAuthAction(result.type, result.data);
          });
        });

    dispatchAuthAction(type, data){
      switch (type) {
        case('EmailLogin'):
          this.store.dispatch(new EmailLogin(data));
          break;
        case('SocialLogin'):
          this.store.dispatch(new SocialLogin(data));
          break;
        case('password'):
          this.store.dispatch(new SetPassword(data));
          break;
      }
    }
}