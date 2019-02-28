import { Component, OnInit } from '@angular/core';
import { BroadcastServiceService } from '../broadcast-service.service';

@Component({
  selector: 'app-broadcast-receiver2',
  templateUrl: './broadcast-receiver2.component.html',
  styleUrls: ['./broadcast-receiver2.component.css']
})
export class BroadcastReceiver2Component implements OnInit {

  public boradCastText: any;

  constructor(private broadCastService: BroadcastServiceService) { }

  ngOnInit() {
    this.broadCastService.subject.subscribe((res => {
      this.boradCastText = res;
    }))
  }

  ngOnDestroy(): void {
    this.broadCastService.subject.unsubscribe();
  }

}
