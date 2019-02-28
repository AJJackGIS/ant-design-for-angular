import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, interval, of, from, timer, range, EMPTY, throwError, NEVER, merge, concat, forkJoin, race } from 'rxjs';
import { take, map, filter, mapTo, takeLast, takeUntil, timeout, first, last, skip, skipLast, skipUntil, skipWhile, concatAll, mergeAll, switchAll, concatMap, mergeMap, switchMap, startWith } from 'rxjs/operators';


/**
 * 学习rxjs
 */
@Component({
  selector: 'app-rxjs-learn',
  templateUrl: './rxjs-learn.component.html',
  styleUrls: ['./rxjs-learn.component.css']
})
export class RxjsLearnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.fun_fromEvent();
    // this.fun_iterator();
    // this.fun_observable_sync();
    // this.fun_observable_async();
    // this.fun_observable_complete();
    // this.fun_observable_error();
    // this.fun_observable_unsubscribe();
    // this.fun_interval();
    // this.fun_timer();
    // this.fun_of();
    // this.fun_range();
    // this.fun_from();
    // this.fun_other();
    // this.fun_operator_3();
    // this.fun_operator_4();
    this.fun_operator_5();
  }

  fun_fromEvent() {
    var eleBtn = document.getElementById("btn");
    fromEvent(eleBtn, 'click').pipe(take(1)).subscribe(e => { //仅发出源Observable发出的第一个计数值。 fromEvent将事件转换为数据流
      console.log('只能点击一次');
      eleBtn.setAttribute('disabled', '');
    });
  }

  fun_iterator() {
    const number = [1, 2, 3, 4];
    const iterator = number[Symbol.iterator]();
    let obj = iterator.next();
    while (!obj.done) {
      console.log(obj.value);
      obj = iterator.next();
    }
  }

  fun_observable_sync() {
    // 定义一个可观察对象源
    const source$ = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
    });
    // 定义一个观察者
    const observer$ = {
      next: (item: any) => { console.log(item); }
    };
    console.log("start...");
    // 注册观察者对象
    source$.subscribe(observer$);
    // 直接将函数对象进行注册
    source$.subscribe(e => { console.log("...." + e) });
    console.log("end...");
  }

  fun_observable_async() {
    // 定义一个可观察对象源
    const source$ = new Observable(observer => {
      let number = 1
      setInterval(() => {
        observer.next(number++)
      }, 1000);
    });
    // 定义一个观察者
    const observer$ = {
      next: (item: any) => { console.log(item); }
    };
    console.log("start...");
    source$.subscribe(observer$);
    console.log("end...");
  }

  fun_observable_complete() {
    // 定义一个可观察对象源
    const source$ = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.complete();
      observer.next(3);
    });
    // 定义一个观察者
    const observer$ = {
      next: (item: any) => { console.log(item); },
      complete: () => { console.log('complete'); }
    };
    source$.subscribe(observer$);
  }

  fun_observable_error() {
    // 定义一个可观察对象源
    const source$ = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      throw new Error("i'm a error");
      observer.complete();
    });
    // 定义一个观察者
    const observer$ = {
      next: (item: any) => { console.log(item); },
      complete: () => { console.log('complete'); },
      error: ((err: any) => { console.log(err); })
    };
    source$.subscribe(observer$);
  }

  fun_observable_unsubscribe() {
    const source$ = new Observable(observer => {
      let number = 1
      setInterval(() => {
        observer.next(number++)
      }, 1000);
    });
    const subscription = source$.subscribe(item => { console.log(item); }) // 订阅
    setTimeout(() => {
      subscription.unsubscribe(); // 3s后取消订阅
    }, 3000);
  }

  fun_interval() {
    interval(1000).pipe( // interval 按照指定的时间间隔，发出一个递增的整数
      take(10), // 取前10个
      map(x => x * x) // 对每个数据流进行处理
    ).subscribe(item => console.log(item));
  }

  fun_timer() {
    console.log('wait 2s');
    timer(2000, 1000).pipe( // timer 等待时间 和 间隔时间
      take(10)
    ).subscribe(item => console.log(item));
  }

  fun_of() {
    of(1, 2, 3).subscribe(item => console.log(item)); // of 将多个参数封装成数据流
  }

  fun_range() {
    range(10, 10).subscribe(item => console.log(item)); // range 将一个区间的参数数字成数据流
  }

  fun_from() {
    from([1, 2, 3, 4]).subscribe(item => console.log(item)); // from 将数组,可遍历的对象,以及promise封装成数据流
  }

  fun_other() {
    EMPTY.subscribe(item => console.log("EMPTY" + item));
    throwError("i'm a error").subscribe({ error: item => console.log(item) });
    NEVER.subscribe(item => console.log("NEVER" + item));
  }

  //几个类似数组方法的基础操作符
  fun_operator_1() {
    of(1, 2, 3, 4, 5).pipe(map(x => x * x)).subscribe(item => console.log(item));
    of(1, 2, 3, 4, 5).pipe(filter(x => x > 2)).subscribe(item => console.log(item));
    of(1, 2, 3, 4, 5).pipe(mapTo(0)).subscribe(item => console.log(item));
  }

  //一些过滤的操作符
  fun_operator_2() {
    interval(1000).pipe(take(5)).subscribe(item => console.log(item));
    range(1, 10).pipe(takeLast(1)).subscribe(item => console.log(item));

    interval(1000).pipe(takeUntil(of().pipe(timeout(2000)))).subscribe(item => console.log(item));

    interval(1000).pipe(first()).subscribe(item => console.log(item));
    interval(1000).pipe(first(x => x === 5)).subscribe(item => console.log(item));

    interval(1000).pipe(last()).subscribe(item => console.log(item));
    interval(1000).pipe(last(x => x > 5)).subscribe(item => console.log(item));

    interval(1000).pipe(skip(10)).subscribe(item => console.log(item));
    interval(1000).pipe(skipLast(10)).subscribe(item => console.log(item));
    interval(1000).pipe(skipUntil(of().pipe(timeout(2000)))).subscribe(item => console.log(item));
    interval(1000).pipe(skipWhile(x => x < 50)).subscribe(item => console.log(item));
  }

  //合并类操作符
  fun_operator_3() {
    concat(// 循序执行
      interval(1000).pipe(take(10)),
      interval(1000).pipe(take(5)),
    ).subscribe(item => console.log(item));

    merge(// 并行执行
      interval(1000).pipe(take(10)),
      interval(1000).pipe(take(5)),
    ).subscribe(item => console.log(item));
  }

  // 高阶转一阶
  fun_operator_4() {
    fromEvent(document, 'click').pipe(map(() => range(1, 10).pipe(take(4))), concatAll()).subscribe(item => console.log(item)); // 循序执行
    fromEvent(document, 'click').pipe(map(() => interval(1000).pipe(take(4))), mergeAll()).subscribe(item => console.log(item)); // 并行执行
    fromEvent(document, 'click').pipe(map(() => interval(1000).pipe(take(4))), switchAll()).subscribe(item => console.log(item)); // 后来订阅的会取消之前的订阅,只执行最后一次的订阅

    // 高阶 Observable 常常是由 map 操作符将每个数据映射为 Observable 产生的，
    // 而我们订阅的时候需要将其压平为一阶 Observable，而就是要先使用 map 操作符再使用 concatAll 或 mergeAll 或 switchAll 这些操作符中的一个。
    // RxJS 中提供了对应的更简洁的 API

    fromEvent(document, 'click').pipe(concatMap(() => range(1, 10).pipe(take(4)))).subscribe(item => console.log(item));
    fromEvent(document, 'click').pipe(mergeMap(() => interval(1000).pipe(take(4)))).subscribe(item => console.log(item));
    fromEvent(document, 'click').pipe(switchMap(() => interval(1000).pipe(take(4)))).subscribe(item => console.log(item));

  }

  fun_operator_5() {
    of('some data').pipe(startWith("start1", "start2")).subscribe(item => console.log(item)); // 之前传递某些Observables

    forkJoin(
      of(1, 2, 3, 4),
      of(5, 6, 7, 8)
    ).subscribe(item => console.log(item)); // 合并最后一次传递的Observables


    const obs1 = interval(1000).pipe(mapTo('fast one'));
    const obs2 = interval(3000).pipe(mapTo('medium one'));
    const obs3 = interval(5000).pipe(mapTo('slow one'));

    race(obs3, obs1, obs2)
      .subscribe(
        winner => console.log(winner)
      );
  }
}
