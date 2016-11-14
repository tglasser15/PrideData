import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-login',
  templateUrl: '../templates/login.component.html',
  styleUrls: ['../css/login.component.css']
})

export class LoginComponent {
  /*heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  } */
  title = "PRIDE Prep";

  /*user = {};
  constructor(
    public af: AngularFire
  ) {
    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
      }
      else {
        // user not logged in
        this.user = {};
      }
    });
  }

  login(): void {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    });
  }

  logout() {
    this.af.auth.logout();
  }*/



  /*constructor(
    private router: Router
  ) {}*/
}
