import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


/**
 * 异步数据服务
 */
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }


  //1、回调函数的方式处理异步问题

  getRemoteDataFromCallback(fun) {
    setTimeout(() => {
      var data = "我是回调函数返回的数据";
      fun(data);
    }, 2000);
  }


  //2、Promise处理异步问题
  /*
    new <{}>(executor: (resolve: (value?: {} | PromiseLike<{}>) => void, reject: (reason?: any) => void) => void) => Promise<{}>
    A callback used to initialize the promise. This callback is passed two arguments: 
    a resolve callback used to resolve the promise with a value or the result of another promise, 
    and a reject callback used to reject the promise with a provided reason or error.
  */
  getRemoteDataFromPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var data = "我是Promise返回的数据";
        resolve(data);
      }, 2000);
    })
  }

  // 3、RXJS处理异步问题
  getRemoteDataFromRxjs() {
    return new Observable((observer) => {
      setTimeout(() => {
        var data = "我是Rxjs返回的数据";
        observer.next(data);
      }, 2000);
    })
  }


}
