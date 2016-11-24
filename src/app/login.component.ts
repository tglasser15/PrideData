import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'my-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {
  title = "PRIDE Prep";

  items: FirebaseListObservable<any[]>;
  user = {};
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
        this.items = af.database.list('/items');
      }
      else {
        // user not logged in
        this.user = {};
      }
    });

  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    });
  }

  logout() {
    this.af.auth.logout();
  }
}
