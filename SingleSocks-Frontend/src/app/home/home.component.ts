import {Component, OnInit} from '@angular/core';
import {AuthLinkList, SingleSockLinkList} from "../SingleSockLink";
import {SockProfile} from "../sock-profile";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  linkList: SingleSockLinkList;
  authLinkList: AuthLinkList;

  socks: SockProfile[] = [
    {
      id: 1,
      name: "Grey Pair",
      picture: "greysocks.png",
      searchingFor: "a new home",
      size: 43,
      condition: "pretty good",
      manufacturer: "Someone",
      price: 2,
      description: "Some Descr",
      deliveryPrime: 2.5
    },
    {
      id: 2,
      name: "Red Single",
      picture: "redsinglesock.png",
      searchingFor: "a match",
      size: 36,
      condition: "good",
      manufacturer: "Someone",
      price: 2,
      description: "Some Descr",
      deliveryPrime: 2.5
    },
    {
      id: 3,
      name: "Blue Striped",
      picture: "bluestripesocks.png",
      searchingFor: "a new home",
      size: 38,
      condition: "new",
      manufacturer: "Someone",
      price: 2,
      description: "Some Descr",
      deliveryPrime: 2.5
    },
    {
      id: 4,
      name: "White Adidas Stripe",
      picture: "whiteadidasstripe.png",
      searchingFor: "a match",
      size: 40,
      condition: "good as new",
      manufacturer: "Someone",
      price: 2,
      description: "Some Descr",
      deliveryPrime: 2.5
    },
    {
      id: 5,
      name: "Model Red Single",
      picture: "redsinglesock.png",
      searchingFor: "a match",
      size: 36,
      condition: "good",
      manufacturer: "Someone",
      price: 2,
      description: "Some Descr",
      deliveryPrime: 2.5
    },
    {
      id: 6,
      name: "Model Red Single",
      picture: "redsinglesock.png",
      searchingFor: "a match",
      size: 36,
      condition: "good",
      manufacturer: "Someone",
      price: 2,
      description: "Some Descr",
      deliveryPrime: 2.5
    }
  ]


  constructor() {
  }

  ngOnInit(): void {
    this.linkList = new SingleSockLinkList();
    this.authLinkList = new AuthLinkList();
  }

}
