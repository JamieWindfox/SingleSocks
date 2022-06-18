import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Container} from "../Container";

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  private url = "api/containers"

  constructor(private httpClient: HttpClient) {
  }

  query() {
    return this.httpClient.get<Container[]>(this.url, {observe: "response"});
  }
}
