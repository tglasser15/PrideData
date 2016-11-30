/** Angular directives */
import {Component} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-login',
  templateUrl: '../templates/login.component.html',
  styleUrls: ['../css/login.component.css']
})
export class LoginComponent {
  model = {
    username: "",
    password: ""
  };

  constructor() {}

  login() {
    console.log(this.model);
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
