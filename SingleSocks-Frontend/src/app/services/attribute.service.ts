import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  private url = "api/attributes"

  constructor(private httpClient: HttpClient) {
  }

  // TODO get rid of enums
  getAttributes() {
    return this.httpClient.get<Map<string, Map<string, string>>>(this.url, {observe: "response"});
  }
}
