import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { GetUser, Logout } from "./actions/user";
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from './utils/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: `
    <app-toolbar (openSidenav)="openSidenav();" (logOut)="logOut();" [user]="user$ | async"></app-toolbar>
    <mat-sidenav-container>
      <mat-sidenav #sidenav mode="over">
        <app-sidenav (closeSidenav)="closeSidenav();"></app-sidenav>
      </mat-sidenav>
    </mat-sidenav-container>
    <div>
        <router-outlet></router-outlet>
        <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  user$: Observable<any>;

  constructor(
    private router: Router, 
    private store: Store<any>
  ) {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }

      window.scrollTo(0, 0);
      if(this.sidenav.opened) this.closeSidenav();
      store.dispatch(new GetUser());
    });

    this.user$ = onStateChangeObservable(store, 'user.userData');
  }

  openSidenav() {
    this.sidenav.open();
  }

  closeSidenav() {
    this.sidenav.close();
  }

  logOut() {
    this.store.dispatch(new Logout());
  }

  ngOnInit() {
    let html = document.getElementsByTagName("html")[0];
    this.sidenav.onOpen.subscribe(_ => {
      document.body.classList.add("o-hidden");
    })

    this.sidenav.onClose.subscribe(_ => {
      document.body.classList.remove("o-hidden");
    })
  }
}
