import { Component, OnInit } from '@angular/core';
import {AuthLinkList, SingleSockLinkList} from "../SingleSockLink";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  linkList: SingleSockLinkList;
  authLinkList: AuthLinkList;

  constructor() { }

  ngOnInit(): void {
    this.linkList = new SingleSockLinkList();
    this.authLinkList = new AuthLinkList();
  }

}
