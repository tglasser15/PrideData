import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
import { UserItem } from '../models/UserItem';
import { DataService } from '../services/dataService.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../css/app.component.css']
})
export class AppComponent implements OnInit {
  title = "PRIDE Prep";
  msg = "hello";


  items: FirebaseListObservable<any[]>;
  user = {};
  public users:UserItem[] = [];

  constructor(public af: AngularFire, private dataService:DataService) {

    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
        console.log(user);

        this.msg = "Logged in";
      }
      else {
        // user not logged in
        this.user = {};
        this.msg = "Logged out";
      }
    });

  }

  ngOnInit() {
    this.dataService.getUsers().subscribe(res => this.users = res);
    console.log(this.users);
  }

  test() {
    this.dataService.getUsers().subscribe(res => this.users = res);
    console.log(this.users);
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
