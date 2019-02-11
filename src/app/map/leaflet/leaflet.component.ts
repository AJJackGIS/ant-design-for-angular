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

    L.tileLayer('http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i380072576!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0', {maxZoom: 21}).addTo(this.map);

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
