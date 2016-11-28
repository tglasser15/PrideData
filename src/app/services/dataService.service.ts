import { Component, Injectable, Inject } from '@angular/core';
import { UserItem } from '../models/UserItem';
import { Http, Headers } from '@angular/http';
import * as constants from '../constants/constants';

@Injectable()
@Inject(Http)
export class DataService {
  _users:UserItem[] = [];
  headers: Headers = new Headers();
  private http:Http;

  constructor(http:Http) {
    this.http = http;
    this.headers.append('X-Parse-Application-Id', constants.AppId);
    this.headers.append('X-Parse-REST-API-Key', constants.AppKey);
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
            result.push(new UserItem(user.objectId, user.username,
              user.email));
          });
        }
        this._users = this._users.concat(result);
        return result;
      });
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
}
