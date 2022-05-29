import { Component, OnInit } from '@angular/core';
import {AuthLinkList, SingleSockLinkList} from "../SingleSockLink";

@Component({
  selector: 'app-diy-corner',
  templateUrl: './diy-corner.component.html',
  styleUrls: ['./diy-corner.component.scss']
})
export class DiyCornerComponent implements OnInit {

  linkList: SingleSockLinkList;
  authLinkList: AuthLinkList;

  constructor() { }

  ngOnInit(): void {
    this.linkList = new SingleSockLinkList();
    this.authLinkList = new AuthLinkList();
  }

}
