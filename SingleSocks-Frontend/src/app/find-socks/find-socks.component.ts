import {Component, OnInit} from '@angular/core';
import {SockProfile} from "../sock-profile";
import {SockService} from "../services/sock.service";
import {environment} from "../../environments/environment";
import {AttributeService} from "../services/attribute.service";

@Component({
  selector: 'app-find-socks',
  templateUrl: './find-socks.component.html',
  styleUrls: ['./find-socks.component.scss']
})
export class FindSocksComponent implements OnInit {

  attributes = new Map<string, any>();
  filteredSocks: SockProfile[] = []

  constructor(private sockService: SockService, private attributeService: AttributeService) {
  }

  ngOnInit(): void {
    this.attributeService.getAttributes().subscribe((result) => {
      let attributes = Object.keys(result.body).filter(value => value != "maintainer");
      for (let attribute of attributes) {
        // @ts-ignore TODO
        this.attributes.set(attribute, result.body[attribute]);
      }
    });

    this.sockService.query().subscribe(result => {
      this.filteredSocks = result.body;

      for (let sock of this.filteredSocks) {
        sock.picture = environment.serverUrl + 'api/images/' + sock._id;
      }
    });
  }

}
