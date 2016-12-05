/** Angular directives */
import {Component, OnInit} from "@angular/core/";
import {Router} from '@angular/router';

/** Services */
import {DataService} from "../services/dataService.service";

/** Models */
import {UserItem} from "../models/UserItem";

@Component({
  selector: 'app-login',
  templateUrl: '../templates/login.component.html',
  styleUrls: ['../css/login.component.css']
})
export class LoginComponent  {
  model = {
    username: "tommy",
    password: "1234"
  };
  currentUser: UserItem;

  constructor(private dataService:DataService, private router:Router) {

  }

  ngOnInit() {}

  login(): void {
    this.dataService.login(this.model).then((user:any) => {
      if (user) {
        this.dataService.loggedInState = true;
        let link = ['/home'];
        this.router.navigate(link);
      }
    });
  }
}
