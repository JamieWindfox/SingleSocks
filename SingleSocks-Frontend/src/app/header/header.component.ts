import {Component, OnInit} from '@angular/core';
import {AuthLinkList, SingleSockLinkList, SingleSockLoggedInLinkList} from "../SingleSockLink";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  linkList = new SingleSockLinkList();
  linkLoggedInlist = new SingleSockLoggedInLinkList();
  authLinkList = new AuthLinkList();
  isMenuVisible = true;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
