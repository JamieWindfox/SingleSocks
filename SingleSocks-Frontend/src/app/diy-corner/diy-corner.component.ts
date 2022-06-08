import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diy-corner',
  templateUrl: './diy-corner.component.html',
  styleUrls: ['./diy-corner.component.scss']
})
export class DiyCornerComponent implements OnInit {

  slideIndex : number = 1;
  diyDisplay_1 : string;
  diyDisplay_2 : string;
  diyDisplay_3 : string;

  constructor() {
    this.showSlides(this.slideIndex);
  }

  ngOnInit(): void {
  }

  changeSlide(n : number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n : number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n : number) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        this.triggerSlide(i+1, "none");
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < slides.length; i++) {
      if(slides[this.slideIndex-1].id == ("diy_") + i.toString()) {
        this.triggerSlide(i+1, "block");
      }
    }
    //slides[this.slideIndex-1].style.display = "block";
    //dots[this.slideIndex-1].className += " active";
  }

  triggerSlide(n : number, action : string) {
    switch(n){
      case 1: this.diyDisplay_1 = action; break;
      case 2: this.diyDisplay_2 = action; break;
      case 3: this.diyDisplay_3 = action; break;
      default: console.log("Invalid ID of DIY Display");
    }
  }

  showSlide(n : number) {
    switch(n){
      case 1: this.diyDisplay_1 = "block"; break;
      case 2: this.diyDisplay_2 = "block"; break;
      case 3: this.diyDisplay_3 = "block"; break;
      default: console.log("Invalid ID of DIY Display");
    }
  }




}

