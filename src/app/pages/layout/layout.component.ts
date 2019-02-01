import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isCollapsed = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigateTo(routeName, ...params) {
    const commands = [routeName].concat(params);
    this.router.navigate(commands);
  }

}
