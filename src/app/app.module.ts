/** Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routedComponents } from './app-routing.module';

/** Components */
import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login.component';

/** Services */
import {NotificationService} from "./services/notification.service"
import {DataService} from "./services/dataService.service";

/** Other libraries */
import './rxjs-extensions';
import {DataResolver} from "./resolves/DataResolver";

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
    AppRoutingModule
  ],
  providers: [
    DataService,
    NotificationService,
    DataResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
