import {Injectable} from '@angular/core';
import {RegistrationUser, User} from "../user";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "api/auth"
  private loggedIn = false;

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

  setLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
  }

  getLoggedIn(): boolean {
    // That's a security issue lol TODO
    // Missing check whether JWT Cookie token is still valid to check if user is logged in or not
    return this.loggedIn;
  }
}
