/** Angular Directives */
import { Component, Injectable, Inject } from '@angular/core';
import { Http, Headers,  } from '@angular/http';

/** Models */
import { UserItem } from '../models/UserItem';

/** Other Libraries */
import * as constants from '../constants/constants';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import {parseCookieValue} from "@angular/platform-browser/src/browser/browser_adapter";


@Injectable()
@Inject(Http)
export class DataService {
  currentUser:UserItem;
  _users:UserItem[] = [];
  headers: Headers = new Headers();
  parseUrl = "https://parseapi.back4app.com/";
  private http:Http;


  constructor(http:Http) {
    this.http = http;
    this.headers.append('X-Parse-Application-Id', constants.AppId);
    this.headers.append('X-Parse-REST-API-Key', constants.AppKey);

  }

  login(user): Promise<UserItem> {
    let url = this.parseUrl + 'login?username=' + user.username + '&password=' + user.password;
    console.log(url);
    return this.http.get(url, {
      headers: this.headers
    }).toPromise()
      .then((response:any)=> {
        localStorage.setItem('parse', response.json().sessionToken);
        //this.headers.append('X-Parse-Session-Token', response.json().sessionToken);
        return response.json();
    })
      .then((user:any) => {
        if (user) {
          this.currentUser = new UserItem(user.objectId, user.username, user.email);
        }
        return Promise.resolve(this.currentUser);

      })
      .catch((error:any) => {
        console.log(error)
      });
  }

  logout(): Promise<UserItem> {
    this.headers.append('X-Parse-Session-Token', localStorage.getItem('parse'));
    let url = this.parseUrl + 'logout';
    return this.http.post(url, {}, {
      headers: this.headers
    }).toPromise()
      .then((response:any)=> {
        return response.json();
      })
      .then((user:any) => {
        localStorage.removeItem('parse');
        console.log(user);
        // if (user) {
        //   this.currentUser = new UserItem(user.objectId, user.username, user.email);
        // }
        //
        // return Promise.resolve(this.currentUser);

      })
      .catch((error:any) => {
        console.log(error)
      });
  }

  getCurrentUser(): Promise<UserItem> {
    this.headers.append('X-Parse-Session-Token', localStorage.getItem('parse'));
    let url = this.parseUrl + 'users/me/';
    return this.http.get(url, {
      headers: this.headers
    }).toPromise()
      .then((response:any)=> {
        return response.json();
      })
      .then((user:any) => {
        console.log(user);
        // if (user) {
        //   this.currentUser = new UserItem(user.objectId, user.username, user.email);
        // }
        //
        // return Promise.resolve(this.currentUser);

      })
      .catch((error:any) => {
        console.log(error)
      });
  }

  getUsers() {
    return this.http.get('https://parseapi.back4app.com/classes/_User', {
      headers: this.headers
    }).map((response:any)=> {
      return response.json();
    })
      .map((users:any) => {
        let result:UserItem[] = [];
        if (users && users.results) {
          users.results.forEach((user)=> {
            //console.log(user);
            result.push(new UserItem(user.objectId, user.username, user.email));
          });
        }
        this._users = this._users.concat(result);
        return result[0];
      })
  }

  addUser(item) {
    let userData = {
      "FullName": item.fullname,
      "Email": item.email,
      "Age": item.age,
      "Address": item.address
    };
    let data = JSON.stringify(userData);
    if (!item.id) {
      return this.http.post('https://api.parse.com/1/classes/Persons', data, {
        headers: this.headers
      });
    }
    return this.http.put('https://api.parse.com/1/classes/Persons/' + item.id, data, {
      headers: this.headers
    });
  }

  getUser(id) {
    return this._users.find(p=>p.id == id);

  }

  deleteUser(item) {
    return this.http.delete('https://api.parse.com/1/classes/Persons/' + item.id, {
      headers: this.headers
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
