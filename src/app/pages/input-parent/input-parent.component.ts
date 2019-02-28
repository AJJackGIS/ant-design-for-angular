import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-parent',
  templateUrl: './input-parent.component.html',
  styleUrls: ['./input-parent.component.css']
})
export class InputParentComponent implements OnInit {

  public typedName: string;
  public reviceName: string;

  constructor() { }

  ngOnInit() {
  }

  eventHandler(e) {
    this.reviceName = e;
  }

}
