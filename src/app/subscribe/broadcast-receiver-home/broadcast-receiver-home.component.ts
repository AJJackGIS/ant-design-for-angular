import { Component, OnInit, OnDestroy } from '@angular/core';
import { BroadcastServiceService } from '../broadcast-service.service';

@Component({
  selector: 'app-broadcast-receiver-home',
  templateUrl: './broadcast-receiver-home.component.html',
  styleUrls: ['./broadcast-receiver-home.component.css']
})
export class BroadcastReceiverHomeComponent implements OnInit, OnDestroy {

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
