import { Component, OnInit } from '@angular/core';
import {AuthLinkList, SingleSockLinkList} from "../SingleSockLink";

@Component({
  selector: 'app-sock-profile',
  templateUrl: './sock-profile.component.html',
  styleUrls: ['./sock-profile.component.scss']
})
export class SockProfileComponent implements OnInit {

  linkList: SingleSockLinkList;
  authLinkList: AuthLinkList;

  constructor() { }

  ngOnInit(): void {
    this.linkList = new SingleSockLinkList();
    this.authLinkList = new AuthLinkList();
  }

}
