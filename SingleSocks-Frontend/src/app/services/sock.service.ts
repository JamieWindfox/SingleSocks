import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SockProfile} from "../sock-profile";

@Injectable({
  providedIn: 'root'
})
export class SockService {
  private url = "api/socks"

  constructor(private httpClient: HttpClient) {
  }

  query() {
    return this.httpClient.get<SockProfile[]>(this.url, {observe: "response"});
  }
}
