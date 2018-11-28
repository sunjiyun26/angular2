import {Component, OnChanges, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {print} from 'util';
import {window} from 'rxjs/operators';
// import {HttpServiceService} from '../core/http-service.service';
import {Observable} from 'rxjs';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit, OnChanges {

  public name = 'sunjiyun';
  public listdata = null;

  flag = 1;

  // private httpservice: HttpServiceService;

  constructor(private http: HttpClient) {
    // this.httpservice = httpservice;
    this.name = 'first-component constructor name';
    this.flag = 2;
    console.log('info\'s constructor');
    // print('cons');
    // wind
  }

  ngOnInit() {
    this.flag = 3;
    console.log('info\'s init ');
    // this.httpservice.get('http://127.0.0.1:8082/check_update');

    this.http.get('http://127.0.0.1:8082/Counts').subscribe(item => {
      console.log(item);
      this.listdata = item;
    });
    console.log('ngOnInit end');
  }

  ngOnChanges() {
    // print('ngOnInit end');
    console.log('info\'s changes');

  }

  onClick(value) {
    console.log('onclick' + value);
  }

  getDaysRemaining(day: number) {
    let leave2: number;
    let minutes: number;
    let leave3: number;
    let seconds: number;
    print('aaaa');
    let date1: string;
    date1 = '2015/05/01 00:00:00';
    //
    let date2: Date;
    date2 = new Date();
    let date3: number;
    date3 = date2.getTime() - new Date(date1).getTime();
    // 计算出相差天数
    let days: number;
    days = Math.floor(date3 / (24 * 3600 * 1000));
    // 计算出小时数
    let leave1: number;
    leave1 = date3 % (24 * 3600 * 1000);
    // 计算天数后剩余的毫秒数
    let hours: number;
    hours = Math.floor(leave1 / (3600 * 1000));
    // 计算相差分钟数
    leave2 = leave1 % (3600 * 1000);
    // 计算小时数后剩余的毫秒数
    minutes = Math.floor(leave2 / (60 * 1000));
    // 计算相差秒数
    leave3 = leave2 % (60 * 1000);
    // 计算分钟数后剩余的毫秒数
    seconds = Math.round(leave3 / 1000);

    alert(' 相差 ' + days + '天 ' + hours + '小时 ' + minutes + ' 分钟' + seconds + ' 秒');
  }

  getDays() {
    let mouth: number;
    let date: Date;
    date = new Date();

    let year: number;
    year = date.getFullYear();

    // 获取当前月份
    mouth = date.getMonth() + 1;

    let days;

    if (2 === mouth) {
      days = year % 4 === 0 ? 29 : 28;

    } else if (1 === mouth || mouth === 3 || mouth === 5 || mouth === 7 || mouth === 8 || mouth === 10 || mouth === 12) {
      days = 31;
    } else {
      days = 30;

    }
    return days;
  }

}



