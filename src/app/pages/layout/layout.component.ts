import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isCollapsed = false;

  containerHeight = null;

  constructor() {
  }

  ngOnInit() {
    this.containerHeight = window.innerHeight - 146 + 'px';
    window.onresize = () => {
      this.containerHeight = window.innerHeight - 146 + 'px';
    };
  }

}
