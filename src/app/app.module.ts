import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from "angularfire2";
import {config} from './../environments/firebase.config';
import './rxjs-extensions';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
