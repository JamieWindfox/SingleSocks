import {Injectable} from '@angular/core';
import {RegistrationUser, User} from "../user";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "api/auth"
  private userId = "";

  constructor(private httpClient: HttpClient) {
  }

  login(user: User) {
    let formData = new URLSearchParams();
    formData.set("email", user.username);
    formData.set("password", user.password);


    return this.httpClient.post(this.url + "/login", formData.toString(), {
      observe: "response",
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  register(user: RegistrationUser) {
    return this.httpClient.post(this.url + "/register", user, {observe: "response"});
  }

  auth() {
    return this.httpClient.get<any>(this.url + "/validate", {observe: "response", withCredentials: true});
  }

  setUserLoggedIn(userId: string) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }

  isUserLoggedIn(): boolean {
    return this.userId != "";
  }
}
