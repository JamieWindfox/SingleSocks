import {Component, OnInit} from '@angular/core';
import {SockProfile} from "../sock-profile";
import {SockService} from "../services/sock.service";
import {environment} from "../../environments/environment";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {UserInfo} from "../user";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userSocks: SockProfile[] = [];
  userInfo: UserInfo;

  constructor(private sockService: SockService, private authService: AuthService, private userService: UserService) {
  }

  ngOnInit(): void {

    this.userService.getUserInfo().subscribe(result => {
      this.userInfo = result.body;
    })

    this.sockService.query().subscribe(result => {
      this.userSocks = result.body.filter(sock => sock.user == this.authService.getUserId());
      for (let sock of this.userSocks) {
        sock.picture = environment.serverUrl + 'api/images/' + sock._id;
      }
    });
  }

  delete(id: string) {
    this.sockService.delete(id).subscribe(() => {
      this.userSocks = this.userSocks.filter(sock => sock._id != id);
    })
  }
}
