import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  loading = true;

  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  index = 0;
  indexContent = '内容1';

  constructor() {
  }

  ngOnInit() {
  }

  indexChange() {
    if (this.index === 0) {
      this.indexContent = '内容1';
    } else if (this.index === 1) {
      this.indexContent = '内容2';
    } else if (this.index === 2) {
      this.indexContent = '内容3';
    }
  }
}
