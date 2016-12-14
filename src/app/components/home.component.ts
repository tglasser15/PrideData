/** Angular Directives */
import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

/** Services */
import {ToastService} from '../services/toastService.service';
import {DataService} from '../services/dataService.service';

/** Models */
import {UserItem} from '../models/userItem';

/** Other libraries */
import {Subject} from 'rxjs/Subject';



@Component({
  selector: 'body',
  host: {
    "[style.background-image]":"bodyBackgroundImage()"
  },
  templateUrl: '../templates/home.component.html',
  styleUrls: ['../css/home.component.css']
})

export class HomeComponent {
  /** Initializers */
  isLoggedIn = false;
  currentUser: UserItem;
  public users: UserItem;

  /** Constructor */
  constructor(private dataService:DataService,
              private route: ActivatedRoute) {
    this.isLoggedIn = true;

    /**route.data
     //.do(console.log)
     .subscribe(
     data => this.user = data['user']
     );*/
  }

  /** Host binding function */
  bodyBackgroundImage() {
    return this.isLoggedIn ? 'url("/app/img/weArePridePrep.JPG")': 'none';
  }

}
