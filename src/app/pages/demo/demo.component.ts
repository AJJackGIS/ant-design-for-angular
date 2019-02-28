import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {


  @ViewChild('childDemo') demoChild: any;

  constructor() { }

  ngOnInit() {
    console.log(this.demoChild.get());
  }

}
