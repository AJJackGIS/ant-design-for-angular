import {Component, OnInit, TemplateRef} from '@angular/core';
import {NzDropdownContextComponent, NzDropdownService} from 'ng-zorro-antd';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  private dropdown: NzDropdownContextComponent;

  constructor(private nzDropdownService: NzDropdownService) {
  }

  ngOnInit() {
  }

  log(data: string) {
    console.log('触发按钮事件' + data);
    this.dropdown.close();
  }

  contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
    this.dropdown = this.nzDropdownService.create($event, template);
  }
}
