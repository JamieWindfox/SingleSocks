import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SockProfile} from "../sock-profile";

@Injectable({
  providedIn: 'root'
})
export class SockService {
  private url = "api/socks";

  constructor(private httpClient: HttpClient) {
  }

  query() {
    return this.httpClient.get<SockProfile[]>(this.url, {observe: "response"});
  }

  queryById(id: string) {
    return this.httpClient.get<SockProfile>(this.url + `/${id}`, {observe: "response"});
  }

  create(sock: SockProfile) {
    return this.httpClient.post<SockProfile>(this.url, sock, {observe: "response", withCredentials: true});
  }

  update(sock: SockProfile) {
    return this.httpClient.put<SockProfile>(this.url + "/" + sock._id, sock, {
      observe: "response",
      withCredentials: true
    });
  }
}
