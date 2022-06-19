import { Component, OnInit } from '@angular/core';
import {AuthLinkList, SingleSockLinkList} from "../SingleSockLink";
import {Color} from "../Color";
import {SockSize} from "../SockSize";
import {SockPattern} from "../SockPattern";
import {SockType} from "../SockType";
import {Material} from "../Material";
import {SockProfile} from "../sock-profile";
import {SockService} from "../services/sock.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-find-socks',
  templateUrl: './find-socks.component.html',
  styleUrls: ['./find-socks.component.scss']
})
export class FindSocksComponent implements OnInit {

  linkList: SingleSockLinkList;
  authLinkList: AuthLinkList;
  colors: string[];
  sizes: string[];
  patterns: string[];
  types: string[];
  materials: string[];

  filteredSocks: SockProfile[] = []

  constructor(private sockService: SockService) {}

  ngOnInit(): void {
    this.linkList = new SingleSockLinkList();
    this.authLinkList = new AuthLinkList();
    this.colors = Object.values(Color).filter((item) => {
      return isNaN(Number(item));
    });
    this.sizes = Object.values(SockSize).filter((item) => {
      return isNaN(Number(item));
    });
    this.patterns = Object.values(SockPattern).filter((item) => {
      return isNaN(Number(item));
    });
    this.types = Object.values(SockType).filter((item) => {
      return isNaN(Number(item));
    });
    this.materials = Object.values(Material).filter((item) => {
      return isNaN(Number(item));
    });

    this.sockService.query().subscribe(result => {
      this.filteredSocks = result.body;

      for (let sock of this.filteredSocks) {
        sock.picture = environment.serverUrl + 'api/images/' + sock._id;
      }
    });
  }

}
