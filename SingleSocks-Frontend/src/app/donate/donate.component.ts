import {Component, OnInit} from '@angular/core';
import {NGO} from "../NGO";
import * as L from 'leaflet';
import {LatLngExpression} from 'leaflet';
import {ContainerService} from "../services/container.service";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  ngoList: NGO[];

  mockBoxes = [[48.23, 16.36], [48.20, 16.5], [48.25, 16.45], [48.20, 16.35], [48.20, 16.4], [48.20, 16.3], [48.22, 16.31], [48.20, 16.325], [48.23, 16.3], [48.17, 16.36]]

  boxes = new Map<NGO, L.Marker[]>();
  selectedNGOs = new Set<NGO>();
  markers: L.LayerGroup = null;

  constructor(private containerService: ContainerService) {
  }

  ngOnInit(): void {
    this.ngoList = Object.values(NGO).filter((item) => {
      return isNaN(Number(item));
    });

    for (let ngo of this.ngoList) {
      this.boxes.set(ngo, []);
    }

    let map = L.map('map').setView([48.20, 16.4], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 30,
      attribution: '© OpenStreetMap'
    }).addTo(map);
    this.markers = L.layerGroup().addTo(map);
    this.containerService.query().subscribe(result => {
      // TODO add container location to DB
      for (let container of result.body) {
        let marker = L.marker([container.location.lat, container.location.lng] as LatLngExpression).addTo(this.markers).bindPopup("Teststraße 22, 10XX Vienna <br> 09:00-23:00 <br> By " + container.maintainer, {closeButton: false});
        this.boxes.get(container.maintainer).push(marker);
      }

      for (let mockData of this.mockBoxes) {
        let marker = L.marker(mockData as LatLngExpression).addTo(this.markers).bindPopup("Teststraße 22, 10XX Vienna <br> 09:00-23:00 <br> By MockData", {closeButton: false});
        this.boxes.get(NGO.caritas).push(marker);
      }
    });
  }

  toggleNGO(ngo: NGO) {
    this.markers.clearLayers();
    if (this.selectedNGOs.has(ngo)) {
      this.selectedNGOs.delete(ngo);
    } else {
      this.selectedNGOs.add(ngo);
    }

    for (let ngo of this.selectedNGOs) {
      this.boxes.get(ngo).forEach(marker => {
        marker.addTo(this.markers);
      })
    }
  }
}
