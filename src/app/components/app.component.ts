import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../css/app.component.css'],
  directives: [NotificationService]
})
export class AppComponent {
  title = "PRIDE Prep";
  msg = "hello";


  items: FirebaseListObservable<any[]>;
  user = {};

  constructor(public af: AngularFire) {

    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
        console.log(user);
        /**const subject = new Subject(); // import {Subject} from 'rxjs/Subject';
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
        subject.next('small');*/
        this.msg = "Logged in";
      }
      else {
        // user not logged in
        this.user = {};
        this.msg = "Logged out";
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
