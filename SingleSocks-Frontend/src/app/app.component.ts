import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.auth().subscribe(result => {
      if (result.body.isValid) {
        this.authService.setUserLoggedIn(result.body.userId);
      }
    })
  }
}
