import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from "angularfire2";

const firebaseConfig = {
  apiKey: "AIzaSyA4BphCCTlUX9-2sv0AIfUztQgqSxEYzyc",
  authDomain: "pridedata-20826.firebaseapp.com",
  databaseURL: "https://pridedata-20826.firebaseio.com",
  storageBucket: "pridedata-20826.appspot.com",
  messagingSenderId: "515079373157"
};

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    routedComponents
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
