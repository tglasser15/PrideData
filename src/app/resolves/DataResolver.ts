import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {UserItem} from "../models/userItem";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {DataService} from "../services/dataService.service";

@Injectable()
export class DataResolver implements Resolve<UserItem> {

  constructor(private dataService: DataService) {

  }

  resolve(route:ActivatedRouteSnapshot,
          state:RouterStateSnapshot): Object {
    return this.dataService.getUsers();
  }
}
