import {Component, OnInit} from '@angular/core';
import {SingleSockLinkList} from "../SingleSockLink";
import {SockProfile} from "../sock-profile";
import {SockService} from "../services/sock.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  linkList: SingleSockLinkList;

  featuredSocks: SockProfile[] = []

  constructor(private sockService: SockService) {
  }

  ngOnInit(): void {
    this.linkList = new SingleSockLinkList();

    // TODO
    this.sockService.query().subscribe(result => {
      this.featuredSocks = result.body;
    });
  }

}
