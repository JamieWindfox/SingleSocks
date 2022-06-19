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

  queryImage(id: string) {
    return this.httpClient.get(this.imageUrl + `/${id}`, {observe: "response", responseType: 'blob'});
  }

  getImagePath(blob: any) {
    return this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
  }
}
