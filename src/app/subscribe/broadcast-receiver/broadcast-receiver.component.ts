import { Component, OnInit } from '@angular/core';
import { BroadcastServiceService } from '../broadcast-service.service';

@Component({
  selector: 'app-broadcast-receiver',
  templateUrl: './broadcast-receiver.component.html',
  styleUrls: ['./broadcast-receiver.component.css']
})
export class BroadcastReceiverComponent implements OnInit {

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
