import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.css']
})
export class LeafletComponent implements OnInit {

  map = null;

  constructor() {
  }

  ngOnInit() {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@716&x={x}&y={y}&z={z}', {maxZoom: 21}).addTo(this.map);

    L.marker([51.5, -0.09], {
      icon:
        L.icon({
          iconUrl: 'assets/start.png',
          iconSize: [45, 70],
          iconAnchor: [22, 70]
        })
    }).addTo(this.map);

    L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2,
      radius: 500
    }).addTo(this.map);

    L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(this.map);
  }

}
