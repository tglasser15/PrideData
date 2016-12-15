/** Angular Directives */
import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/dataService.service";
import {ToastService} from "../services/toastService.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../css/app.component.css']
})

export class AppComponent implements OnInit {
  /** Initializers */
  isLoggedIn = false;

  /** Constructor */
  constructor(private dataService: DataService,
              private router: Router){
    router.events.subscribe((val) => {
      this.isLoggedIn = dataService.getLoginStatus();
      if (!this.isLoggedIn) {
        let link = ['/login'];
        this.router.navigate(link);
      }
    })
  }

  ngOnInit() {}

}
