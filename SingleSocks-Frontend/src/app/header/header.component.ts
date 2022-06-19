import {Component, OnInit} from '@angular/core';
import {AuthLinkList, SingleSockLinkList, SingleSockLoggedInLinkList} from "../SingleSockLink";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

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

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    // TODO
  }
}
