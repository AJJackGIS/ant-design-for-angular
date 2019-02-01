import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isCollapsed = false;

  containerHeight = '400px';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.containerHeight = window.innerHeight - 186 + 'px';
  }

  navigateTo(routeName, ...params) {
    console.log(routeName);
    console.log(params);
    const commands = [routeName].concat(params);
    this.router.navigate(commands);
  }

}
