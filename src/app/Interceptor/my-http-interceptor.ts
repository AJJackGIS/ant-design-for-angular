import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { mergeMap, catchError } from "rxjs/operators";
import { NzNotificationService } from "ng-zorro-antd";


/**
 * 自定义HTTP拦截器
 */
@Injectable({
    providedIn: 'root'
})
export class MyHttpInterceptor implements HttpInterceptor {

    constructor(private notification: NzNotificationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // 在HTTP拦截器中可以对request中的访问头统一处理，比如添加token,允许跨域访问
        const selfReq = req.clone({ headers: req.headers.set("xxx", "ooo"), params: req.params.set("aaa", "bbb"), withCredentials: true });

        // 在HTTP请求结束后，对资源的请求情况做一些处理
        return next.handle(selfReq).pipe(
            mergeMap((event: any) => {

                // 处理200的成功请求
                if (event instanceof HttpResponse && event.status === 200) {
                    this.handleSuccess(event);
                    return of(event);
                }
                // 处理其他一些2系列成功请求3系列的重定向请求
                return of(event);
            }),
            catchError((err: HttpErrorResponse) => {
                return this.handleError(err);
            })
        );
    }

    /**
     * 处理成功请求
     */
    handleSuccess(event: HttpResponse<any>) {
        console.log("请求成功");
    }

    /**
     * 处理失败请求
     */
    handleError(err: HttpErrorResponse) {

        console.log("请求失败");

        console.log(err.status + "-----" + err.message + "|||||" + JSON.stringify(err.error));

        this.notification.error("请求错误", err.message);
        
        return throwError(err);
    }
}
