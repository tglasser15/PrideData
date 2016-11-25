import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "PRIDE Prep";

  items: FirebaseListObservable<any[]>;
  user = {};
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
        console.log(user);
        const subject = new Subject(); // import {Subject} from 'rxjs/Subject';
        const query = af.database.list('/items', {
          query: {
            orderByChild: 'size',
            equalTo: subject
          }
        });
        // subscribe to changes
        query.subscribe(queriedItems => {
          console.log(queriedItems);
        });

        // trigger the query
        subject.next('large');

        // re-trigger the query!!!
        subject.next('small');

        this.title = "logged in";
      }
      else {
        // user not logged in
        this.user = {};
        this.title = "logged out";
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
