import {Component, OnInit} from '@angular/core';
import * as L from "leaflet";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  selectedMarker: L.Marker;

  constructor() {
  }

  ngOnInit(): void {
    let map = L.map('map').setView([48.20, 16.4], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 30,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    map.on("click", (e: any) => {
      if (this.selectedMarker) {
        map.removeLayer(this.selectedMarker);
      }
      this.selectedMarker = L.marker(e.latlng).addTo(map);
    });
  }

}
