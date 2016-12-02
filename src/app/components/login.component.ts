/** Angular directives */
import {Component, OnInit} from "@angular/core/";

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

  submitted = false;

  constructor(private dataService:DataService) {}

  ngOnInit() {}

  login() {
    this.dataService.login(this.model).then((user:any) => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
  }

}
