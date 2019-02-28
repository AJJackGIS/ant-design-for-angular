import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css']
})
export class InputChildComponent implements OnInit, OnDestroy {

  @Input() protected inputName: string;
  protected outName: string;
  @Output() protected event: EventEmitter<string> = new EventEmitter();
  protected intervalFlag: any;

  constructor() { }

  ngOnInit() {
    this.intervalFlag = setInterval(() => {
      this.outName = Math.random() * 100 + "元";
      this.event.emit(this.outName);
      console.log(this.outName);
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalFlag);

  }

}
