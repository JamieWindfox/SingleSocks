import {Component, OnInit} from '@angular/core';
import {AuthLinkList, SingleSockLinkList} from "../SingleSockLink";
import {AuthService} from "../services/auth.service";


const backgroundImg =
  [
    "/assets/socks.png",
    "/assets/longsocks.png",
    "/assets/socks.png",
    "/assets/longsocks.png",
  ];

/*
    const backgroundImg =
        [
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1517057011470-8f36d636e6ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/flagged/photo-1552035791-b3cc1632e933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
            "https://images.unsplash.com/photo-1574700273608-7962d3602a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1605045544284-d13c6d6a60a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        ];
 */

const headerHeading =
  [
    "Welcome to SingleSocks",
    "Don't worry about not finding a perfect match",
    "Enjoy sock-life to the fullest",
    "Join SingleSocks now!"
  ];

const headerSubheading =
  [
    "Do not worry - we got you!",
    "You register - we do the work!",
    "..so your socks don't have to be alone!",
    "It's free!"
  ];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  linkList = new SingleSockLinkList();
  authLinkList = new AuthLinkList();
  isMenuVisible = true;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
