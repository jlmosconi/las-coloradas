import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from '../environments/environment';
import { reducer } from './reducers';

import { AuthModalComponent } from './components/widgets/auth-modal/auth-modal.component';
import { AuthModalModule } from './components/widgets/auth-modal/auth-modal.module';

import { services as SERVICES } from './services';
import { navigation as NAVIGATION } from "./components/navigation/";

import { AboutEffects } from "./effects/about";
import { AuthEffects } from "./effects/auth";
import { ContactEffects } from "./effects/contact";
import { LayoutEffects } from "./effects/layout";
import { ProductsEffects } from "./effects/products";
import { ToastrEffects } from "./effects/toastr";
import { UserEffects } from "./effects/user";

import { MatSidenavModule, MatSnackBarModule } from "@angular/material";
import { AgmCoreModule } from '@agm/core';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    NAVIGATION,
    StoreModule.forRoot({reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    EffectsModule.forRoot([
      AboutEffects,
      AuthEffects,
      ContactEffects,
      LayoutEffects,
      ProductsEffects,
      ToastrEffects,
      UserEffects
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDFHjz1Y0E5cyM77FGGH3gnEZag9pWBPcY'
    }),
    MatSidenavModule,
    MatSnackBarModule,
    AuthModalModule,
    AngularFireAuthModule
  ],
  providers: [SERVICES, AngularFireDatabase],
  bootstrap: [AppComponent],
  entryComponents: [AuthModalComponent]
})
export class AppModule { }
