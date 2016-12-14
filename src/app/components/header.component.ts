/** Angular Directives */
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

/** Services */
import {DataService} from '../services/dataService.service';

/** Models */
import {UserItem} from '../models/userItem';

/** Other libraries */

@Component({
  selector: 'app-header',
  templateUrl: '../templates/header.component.html',
  styleUrls: ['../css/header.component.css']
})

export class HeaderComponent implements OnInit {
  /** Initializers */

  constructor(private dataService: DataService,
              private router: Router) {}

  ngOnInit() {}

  logout(): void {
    this.dataService.logout().then(() => {
      console.log("logout successful");
      let link = ['/login'];
      this.router.navigate(link);
    });
  }

}
