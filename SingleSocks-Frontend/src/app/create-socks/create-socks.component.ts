import { Component, OnInit } from '@angular/core';
import {AuthLinkList, SingleSockLinkList} from "../SingleSockLink";
import {Color} from "../Color";
import {SockSize} from "../SockSize";
import {SockPattern} from "../SockPattern";

@Component({
  selector: 'app-create-socks',
  templateUrl: './create-socks.component.html',
  styleUrls: ['./create-socks.component.scss']
})
export class CreateSocksComponent implements OnInit {

  linkList: SingleSockLinkList;
  authLinkList: AuthLinkList;
  colors: string[];
  sizes: string[];
  patterns: string[];

  constructor() { }

  ngOnInit(): void {
    this.linkList = new SingleSockLinkList();
    this.authLinkList = new AuthLinkList();
    this.colors = Object.values(Color).filter((item) => {
      return isNaN(Number(item));
    });
    this.sizes = Object.values(SockSize).filter((item) => {
      return isNaN(Number(item));
    })
    this.patterns = Object.values(SockPattern).filter((item) => {
      return isNaN(Number(item));
    })
  }

}
