import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastServiceService {

  // 广播服务提供者
  public subject: Subject<any> = new Subject<any>();

  constructor() {

    setInterval(() => {
      this.subject.next(Math.random() * 10);
    }, 2000);

  }
}
