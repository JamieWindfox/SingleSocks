import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Member variables
  title = "Titel";
  isVisible = true;

  list = [2, 1, 4, 43, 42, 23];

  // The equivalent of "public String name"
  name: string;

  constructor() {
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  onClick() {
    this.isVisible = !this.isVisible;
  }

  // To generate a new component just like this one
  // Use following command: ng generate component <NAME>
}
