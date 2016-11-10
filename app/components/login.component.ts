import { Component, OnInit } from '@angular/core';
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
  //arse = require('parse');
  user = new Parse.User();
  user.set("username", "my name");
  user.set("password", "1234");
  user.set("email", "email@example.com");

  user.signUp(null, {
    success: function(user) {
    // Hooray! Let them use the app now.
  },
    error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
  });

  constructor(
    private router: Router
  ) {}
}
