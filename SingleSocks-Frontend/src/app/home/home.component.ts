import {Component, OnInit} from '@angular/core';
import {AuthLinkList, SingleSockLinkList} from "../SingleSockLink";
import {SockProfile} from "../sock-profile";
import {SockService} from "../services/sock.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  linkList: SingleSockLinkList;
  authLinkList: AuthLinkList;

  featuredSocks: SockProfile[] = []

  constructor(private sockService: SockService) {
  }

  ngOnInit(): void {
    this.linkList = new SingleSockLinkList();
    this.authLinkList = new AuthLinkList();

    // TODO
    this.sockService.query().subscribe(result => {
      this.featuredSocks = result.body;
    });
  }

}
