/** Angular directives */
import {Component, OnInit} from "@angular/core/";
import {Router} from '@angular/router';

/** Services */
import {DataService} from "../services/dataService.service";
import {ToastService} from "../services/toastService.service";

/** Models */
import {UserItem} from "../models/userItem";

@Component({
  selector: 'app-login',
  templateUrl: '../templates/login.component.html',
  styleUrls: ['../css/login.component.css']
})
export class LoginComponent implements OnInit {
  model = {
    username: "tommy",
    password: "1234"
  };
  currentUser: UserItem;

  constructor(private dataService: DataService,
              private toastService: ToastService,
              private router: Router) {

  }

  ngOnInit() {
    if (localStorage.getItem('parse')) {
      let link = ['/home'];
      this.router.navigate(link);
    }
  }

  login(): void {
    this.dataService.login(this.model).then((user:any) => {
      if (user) {
        let link = ['/home'];
        this.router.navigate(link);
      }
    });
  }
}
