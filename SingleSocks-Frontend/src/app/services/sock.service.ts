import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SockProfile} from "../sock-profile";
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SockService {
  private url = "api/socks";
  private imageUrl = "api/images";

  constructor(private httpClient: HttpClient, private _sanitizer: DomSanitizer) {
  }

  query() {
    return this.httpClient.get<SockProfile[]>(this.url, {observe: "response"});
  }

  queryById(id: string) {
    return this.httpClient.get<SockProfile>(this.url + `/${id}`, {observe: "response"});
  }

  queryImage(id: string) {
    return this.httpClient.get(this.imageUrl + `/${id}`, {observe: "response", responseType: 'blob'});
  }

  getImagePath(blob: any) {
    return this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
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
