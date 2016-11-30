/** Angular Directives */
import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Http } from '@angular/http';

/** Services */
import { NotificationService } from '../services/notification.service';
import { DataService } from '../services/dataService.service';

/** Models */
import { UserItem } from '../models/UserItem';

/** Other libraries */
import { Subject } from 'rxjs/Subject';



@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../css/app.component.css']
})
export class AppComponent implements OnInit {
  title = "PRIDE Prep";
  msg = "hello";

  user:UserItem;
  test2 = {};
  //public users:UserItem[] = [];
  public users:UserItem;

  constructor(private dataService:DataService, private route: ActivatedRoute) {
    route.data
      //.do(console.log)
      .subscribe(
        data => this.user = data['user']
    );
  }

  ngOnInit() {
    this.dataService.getUsers().subscribe(res => this.users = res);
    //console.log(this.users);
  }

  test() {
    this.dataService.getUsers().subscribe(res => {
        this.users = res;
        this.user = this.users[0];
    });
    console.log(this.users);
  }

  login() {


  }

  logout() {

  }
}
