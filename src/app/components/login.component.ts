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
  user: UserItem;

  submitted = false;

  constructor(private dataService:DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(res => this.user = res)
  }

  login() {
    this.submitted = true;
    console.log(this.model);
    console.log(this.user);
  }

}
