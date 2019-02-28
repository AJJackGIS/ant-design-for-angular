import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-http-page',
  templateUrl: './http-page.component.html',
  styleUrls: ['./http-page.component.css']
})
export class HttpPageComponent implements OnInit {

  public httpData: any;

  public parallelData: any;


  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {
    // this.httpService.getProjectInfo().pipe(tap(res => { console.log(res) })).subscribe(res => this.httpData = res);

    // this.httpService.parallelRequests().pipe(tap(res => { console.log(res) })).subscribe(res => this.parallelData = res);

    this.httpService.errorRequest().pipe(catchError(error => {
      console.error("Error catched", error);
      return of({ description: 'Error Value Emitted' });
    })).subscribe(res => {
      console.log(res);
    })
  }

}
