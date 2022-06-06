import {Component, OnInit} from '@angular/core';
import {NGO} from "../NGO";
import * as L from 'leaflet';
import {LatLngExpression} from 'leaflet';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  ngoList: string[];

  boxes = [[48.23, 16.36], [48.20, 16.5], [48.25, 16.45], [48.20, 16.35], [48.20, 16.4], [48.20, 16.3]]

  constructor() {
  }

  ngOnInit(): void {
    this.ngoList = Object.values(NGO).filter((item) => {
      return isNaN(Number(item));
    });
    var map = L.map('map').setView([48.20, 16.4], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 30,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    for (let coords of this.boxes) {
      L.marker(coords as LatLngExpression).addTo(map).bindPopup("Teststraße 22, 10XX Vienna <br> 09:00-23:00")
    }
  }

}
