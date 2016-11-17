import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
