import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flipcard',
  templateUrl: './flipcard.component.html',
  styleUrls: ['./flipcard.component.css']
})
export class FlipcardComponent implements OnInit {

  public flipFlag: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  flip() {

    this.flipFlag = !this.flipFlag;

  }

}
