import {Component, OnInit} from '@angular/core';
import {Color} from "../Color";
import {SockSize} from "../SockSize";
import {SockPattern} from "../SockPattern";
import {SockType} from "../SockType";
import {Material} from "../Material";

@Component({
  selector: 'app-create-socks',
  templateUrl: './create-socks.component.html',
  styleUrls: ['./create-socks.component.scss']
})
export class CreateSocksComponent implements OnInit {
  colors: string[];
  sizes: string[];
  patterns: string[];
  types: string[];
  materials: string[];


  constructor() { }

  ngOnInit(): void {
    this.colors = Object.values(Color).filter((item) => {
      return isNaN(Number(item));
    });
    this.sizes = Object.values(SockSize).filter((item) => {
      return isNaN(Number(item));
    });
    this.patterns = Object.values(SockPattern).filter((item) => {
      return isNaN(Number(item));
    });
    this.types = Object.values(SockType).filter((item) => {
      return isNaN(Number(item));
    });
    this.materials = Object.values(Material).filter((item) => {
      return isNaN(Number(item));
    });
  }

}
