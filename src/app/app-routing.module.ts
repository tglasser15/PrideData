/** Modules */
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

/** Components */
import {LoginComponent} from "./components/login.component";
import {HomeComponent} from "./components/home.component";

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
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      user: DataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const RoutedComponents = [LoginComponent];
