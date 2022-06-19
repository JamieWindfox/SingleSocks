import {Component, OnInit} from '@angular/core';
import {SockProfile} from "../sock-profile";
import {ActivatedRoute} from "@angular/router";
import {SockService} from "../services/sock.service";

@Component({
  selector: 'app-sock-profile',
  templateUrl: './sock-profile.component.html',
  styleUrls: ['./sock-profile.component.scss']
})
export class SockProfileComponent implements OnInit {

  technicalDescription = true;

  sock: SockProfile;

  constructor(private route: ActivatedRoute, private sockService: SockService) {
  }

  ngOnInit(): void {
    // TODO get sock by Id
    const sockId = this.route.snapshot.paramMap.get('id');

    this.sockService.queryById(sockId).subscribe(result => {
      this.sockService.queryImage(result.body._id).subscribe(imgResult => {
        this.sock = result.body;
        this.sock.picture = this.sockService.getImagePath(imgResult.body);
      });
    })
  }

}
