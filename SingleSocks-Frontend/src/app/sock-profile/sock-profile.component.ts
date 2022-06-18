import {Component, OnInit} from '@angular/core';
import {SockProfile} from "../sock-profile";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sock-profile',
  templateUrl: './sock-profile.component.html',
  styleUrls: ['./sock-profile.component.scss']
})
export class SockProfileComponent implements OnInit {

  technicalDescription = true;

  // TODO get sock by Id

  sock: SockProfile;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // TODO get sock by Id
    const sockId = this.route.snapshot.paramMap.get('id');
  }

}
