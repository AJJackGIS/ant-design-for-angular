import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-axios-page',
  templateUrl: './axios-page.component.html',
  styleUrls: ['./axios-page.component.css']
})
export class AxiosPageComponent implements OnInit {

  auto_loken: string = 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTE2ODQ0ODgsInN1YiI6IjEiLCJpc3MiOiJ3ZWIiLCJleHAiOjE1NTE2ODYyODh9.33dJ1QF-NwluLY3THufRG2IrsjaxVWHr1Mpn7irc5EQ';
  get_api: string = 'http://172.29.1.233/pscm/space/project/baseStats/list';

  constructor(private router: Router, private notification: NzNotificationService) { }

  ngOnInit() {
    
    //axios拦截器
    axios.interceptors.request.use((config: AxiosRequestConfig) => {
      console.log("before", config);
      const httpConfig = {
        params: { pageNum: "1", pageSize: "10" },
        headers: { 'auth-token': this.auto_loken },
        timeout: 2000,
        withCredentials: true,
        responseType: 'json'
      }
      // 在发送请求之前做些什么,主要是传递config
      return Object.assign(config, httpConfig);
      // return config;
    }, (error: any) => {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

    axios.interceptors.response.use((response: AxiosResponse<any>) => {
      this.notification.success("请求成功", JSON.stringify(response.data));
      console.log("after", response.config);
      // 对响应数据做点什么
      return response;
    }, (error: AxiosError) => {
      const status = error.response.status;
      console.log("错误码：" + status);
      // 根据错误码和相关其他信息做错误处理
      this.notification.error("发生错误啦", JSON.stringify(error.response.data));
      // this.router.navigateByUrl("/");
      // 对响应错误做点什么
      return Promise.reject(error);
    })
  }

  getRequest() {

    // const header = new HttpHeaders().set('auth-token', this.auto_loken);
    // const param = new HttpParams({ fromObject: { pageNum: "1", pageSize: "10" } });
    // return this.http.get(this.get_api, { headers: header, observe: "response", params: param, reportProgress: true, withCredentials: true });



    axios.get(this.get_api)
      .then(response => {
        console.log(response);
        console.log(response.status);
      })
      .catch(error => {
        console.log("error", error);
      });
  }
}
