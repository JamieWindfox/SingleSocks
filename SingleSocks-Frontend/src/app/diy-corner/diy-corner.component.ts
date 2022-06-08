import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diy-corner',
  templateUrl: './diy-corner.component.html',
  styleUrls: ['./diy-corner.component.scss']
})
export class DiyCornerComponent implements OnInit {

  slideIndex: number = 1;

  constructor() {
  }

  ngOnInit(): void {
    setInterval(this.nextSlide, 5000);
  }

  changeSlide(n: number) {
    this.slideIndex = n;
  }

  nextSlide() {
    if (this.slideIndex == 3) {
      this.slideIndex = 1;
    } else {
      this.slideIndex++;
    }
  }

}
