import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childdemo',
  templateUrl: './childdemo.component.html',
  styleUrls: ['./childdemo.component.css']
})
export class ChilddemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get(){
    console.log('我是child');
  }
}
