import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  private url = "api/attributes"

  constructor(private httpClient: HttpClient) {
  }

  getColors() {
    return this.httpClient.get<Map<string, string>>(this.url + "/mainColor", {observe: "response"});
  }
  // TODO
}
