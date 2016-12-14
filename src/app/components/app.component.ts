/** Angular Directives */
import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/dataService.service";
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
      if (!localStorage.getItem('parse')) {
        this.isLoggedIn = false;
        let link = ['/login'];
        this.router.navigate(link);
      } else {
        this.isLoggedIn = true;
      }
    })
  }

  ngOnInit() {}

}
