import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { services as SERVICES } from './services';
import { navigation as NAVIGATION } from "./components/navigation/";

import 'hammerjs';

const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboardControl: true
};

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
    SwiperModule.forRoot(SWIPER_CONFIG)
  ],
  providers: [SERVICES, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
