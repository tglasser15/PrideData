/** Modules */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule, RoutedComponents} from './app-routing.module';

/** Components */
import {AppComponent} from './components/app.component';
import {LoginComponent} from './components/login.component';
import {HeaderComponent} from './components/header.component';
import {HomeComponent} from './components/home.component';

/** Services */
import {ToastService} from "./services/toastService.service"
import {DataService} from "./services/dataService.service";

/** Other libraries */
import './rxjs-extensions';
import {DataResolver} from "./resolves/DataResolver";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    RoutedComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    /** Services */
    DataService,
    ToastService,
    /** Resolvers */
    DataResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
