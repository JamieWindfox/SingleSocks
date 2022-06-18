import {Injectable} from '@angular/core';
import {User} from "../user";
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

  setLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
  }

  getLoggedIn(): boolean {
    // That's a security issue lol TODO
    return this.loggedIn;
  }
}
