/** Modules */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Components */
import {AppComponent} from "./components/app.component";
import {LoginComponent} from "./components/login.component";

/** Resolvers */
import {DataResolver} from "./resolves/DataResolver";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }
  /**{
    path: 'home',
    component: AppComponent,
    resolve: {
      user: DataResolver
    }
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [/**LoginComponent*/];
