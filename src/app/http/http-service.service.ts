import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  auto_loken: string = 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTExNjY4NDYsInN1YiI6IjEiLCJpc3MiOiJ3ZWIiLCJleHAiOjE1NTExNjg2NDZ9.TwItuLWWt7toBTYMk_kJsB88iN3NaGOMumt8T7krHHE';
  get_api: string = 'http://172.29.2.33/pscm/space/project/baseStats/list';
  project_api: string = 'http://172.29.2.33/pscm/space/project/choiceList';
  building_api: string = 'http://172.29.2.33/pscm/space/building/choiceList';
  error_api: string = 'http://172.29.2.33/static/tempImg/bg-title.png';

  constructor(private http: HttpClient) { }

  getProjectInfo() {

    // 通过链式语法调用 set() 方法，构建 HttpParams 对象。这是因为 HttpParams 对象是不可变的，通过 set() 方法可以防止该对象被修改。
    const header = new HttpHeaders().set('auth-token', this.auto_loken);
    const param = new HttpParams({ fromObject: { pageNum: "1", pageSize: "10" } });

    /**
     * (method) HttpClient.get(url: string, options?: {
            headers?: HttpHeaders | {
                [header: string]: string | string[];
            };
            observe?: "body";
            params?: HttpParams | {
                [param: string]: string | string[];
            };
            reportProgress?: boolean;
            responseType?: "json";
            withCredentials?: boolean;
        }): Observable<...>
     */

    // 默认情况下，HttpClient 服务返回的是响应体，有时候我们需要获取响应头的相关信息，这时你可以设置请求 options 对象的 observe 属性值为 response 来获取完整的响应对象。
    // 如果你期望的响应对象的格式不是 JSON，你可以通过 responseType 属性来设定响应类型, 除了支持 json 和 text 类型外，还支持 arraybuffer 和 blob 类型
    return this.http.get(this.get_api, { headers: header, observe: "response", params: param, reportProgress: true, withCredentials: true });
  }

  /**
   * 并行发送多个 Http 请求
   */
  parallelRequests() {
    const header = new HttpHeaders().set('auth-token', this.auto_loken);
    const param = new HttpParams({ fromObject: { projectId: "1" } });
    return forkJoin(
      this.http.get(this.project_api, { headers: header, reportProgress: true, withCredentials: true }),
      this.http.get(this.building_api, { headers: header, params: param, reportProgress: true, withCredentials: true })
    )
  }

  /**
   * 捕获错误访问信息
   */
  errorRequest() {
    return this.http.get(this.error_api);
  }

}
