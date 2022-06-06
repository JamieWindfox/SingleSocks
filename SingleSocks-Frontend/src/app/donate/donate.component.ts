import {Component, OnInit} from '@angular/core';
import {NGO} from "../NGO";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  ngoList: string[];

  constructor() { }

  ngOnInit(): void {
    this.ngoList = Object.values(NGO).filter((item) => {
      return isNaN(Number(item));
    });
  }

}
