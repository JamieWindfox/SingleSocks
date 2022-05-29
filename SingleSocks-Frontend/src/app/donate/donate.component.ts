import { Component, OnInit } from '@angular/core';
import {AuthLinkList, SingleSockLinkList} from "../SingleSockLink";
import {Color} from "../Color";
import {NGO} from "../NGO";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  linkList: SingleSockLinkList;
  authLinkList: AuthLinkList;
  ngoList: string[];

  constructor() { }

  ngOnInit(): void {
    this.linkList = new SingleSockLinkList();
    this.authLinkList = new AuthLinkList();
    this.ngoList = Object.values(NGO).filter((item) => {
      return isNaN(Number(item));
    });
  }

}
