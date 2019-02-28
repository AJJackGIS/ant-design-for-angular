import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public callbackData: any;
  public promiseData: any;
  public rxjsData: any;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getRemoteDataFromCallback((res) => {
      this.callbackData = res;
    })

    this.dataService.getRemoteDataFromPromise().then(res => {
      this.promiseData = res;
    })

    this.dataService.getRemoteDataFromRxjs().subscribe(res => {
      this.rxjsData = res;
    })
  }

}
