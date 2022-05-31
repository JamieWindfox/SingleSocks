import {Component, OnInit} from '@angular/core';
import {AuthLinkList, SingleSockLinkList} from "../SingleSockLink";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  linkList = new SingleSockLinkList();
  authLinkList = new AuthLinkList();

  ngOnInit(): void {
  }

}
