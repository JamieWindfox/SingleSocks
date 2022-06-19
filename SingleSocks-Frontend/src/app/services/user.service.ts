import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserInfo} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "api/users"

  constructor(private httpClient: HttpClient) {
  }

  getUserInfo() {
    return this.httpClient.get<UserInfo>(this.url + "/current", {observe: "response"});
  }
}
