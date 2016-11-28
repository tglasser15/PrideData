import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { NotificationService } from "./services/notification.service"
import { AppRoutingModule, routedComponents } from './app-routing.module';
import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from "angularfire2";
import {config} from './../environments/firebase.config';
import './rxjs-extensions';
import {DataService} from "./services/dataService.service";


@NgModule({
  declarations: [
    AppComponent,
    NotificationService,
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
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
