import {Component, OnInit} from '@angular/core';
import {SockProfile} from "../sock-profile";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sock-profile',
  templateUrl: './sock-profile.component.html',
  styleUrls: ['./sock-profile.component.scss']
})
export class SockProfileComponent implements OnInit {

  // TODO get sock by Id
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

  sock: SockProfile;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // TODO get sock by Id
    const sockId = this.route.snapshot.paramMap.get('id');
    this.sock = this.socks[Number(sockId) - 1];
  }

}
