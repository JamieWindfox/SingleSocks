import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  href = "/home";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && !val.url.includes("#")) {
        this.href = val.url;
      }
    })
  }
}
