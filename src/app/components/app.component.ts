/** Angular Directives */
import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

/** Services */
import { NotificationService } from '../services/notification.service';
import { DataService } from '../services/dataService.service';

/** Models */
import { UserItem } from '../models/UserItem';

/** Other libraries */
import { Subject } from 'rxjs/Subject';



@Component({
  selector: 'body',
  host: {
    "[style.background-image]":"bodyBackgroundImage()"
  },
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../css/app.component.css']
})

export class AppComponent implements OnInit {
  /** Initializers */
  isLoggedIn = false;
  currentUser:UserItem;
  public users:UserItem;

  /** Constructor */
  constructor(private dataService:DataService, private route: ActivatedRoute) {
    this.isLoggedIn = dataService.loggedInState;

    /**route.data
      //.do(console.log)
      .subscribe(
        data => this.user = data['user']
    );*/
  }

  /** ngOnInit() */
  ngOnInit() {
    this.dataService.getCurrentUser().then((user: any) => {
      this.currentUser = user;
      this.isLoggedIn = true;
    });
  }

  /** Host binding function */
  bodyBackgroundImage() {
    return this.isLoggedIn ? 'url("/app/img/weArePridePrep.JPG")': 'none';
  }

  /**test() {
    this.dataService.getUsers().subscribe(res => {
        this.users = res;
        this.user = this.users[0];
    });
    console.log(this.users);
  }*/

  login() {

  }

  logout() {

  }
}
