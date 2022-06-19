import {Component, OnInit} from '@angular/core';
import {SockProfile} from "../sock-profile";
import {SockService} from "../services/sock.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userInformation = true;

  userSocks: SockProfile[] = [];


  constructor(private sockService: SockService) {
  }

  ngOnInit(): void {

  this.sockService.query().subscribe(result => {
    this.userSocks = result.body;

    for (let sock of this.userSocks) {
      this.sockService.queryImage(sock._id).subscribe(result => {
        sock.picture = this.sockService.getImagePath(result.body);
        });
      }
    });

  }

}
