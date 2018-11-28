import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import * as moment from 'moment';
// import { environment } from '../../environments/environment';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(protected  http: HttpClient) {
  }

  private _loading = false;
  private moment: any;

  /** 是否正在加载中 */
  get loading(): boolean {
    return this._loading;
  }

  parseParams(params: any): HttpParams {
    let ret = new HttpParams();
    if (params) {
      // tslint:disable-next-line:forin
      for (const key in params) {
        let _data = params[key];
        // 将时间转化为：时间戳 (秒)
        if (this.moment.isDate(_data)) {
          _data = moment(_data).unix();
        }
        ret = ret.set(key, _data);
      }
    }
    return ret;
  }

  private begin() {
    console.time('http');
    this._loading = true;
  }

  private end() {
    console.time('aaa');
    this._loading = false;
  }

  /** 服务端URL地址 */
  get SERVER_URL(): string {
    return 'http://127.0.1.1:8080';
  }

  /**
   * GET请求
   *
   * @param {string} url URL地址
   * @param {*} [params] 请求参数
   */
  get(url: string, params?: any): Observable<any> {
    this.begin();
    return this.http
      .get(url, {
        params: this.parseParams(params)
      })
      .do(() => this.end())
      .catch((res) => {
        this.end();
        console.log(res);
        return res;
      });
  }

  /**
   * POST请求
   *
   * @param {string} url URL地址
   * @param {*} [body] body内容
   * @param {*} [params] 请求参数
   */
  post(url: string, body?: any, params?: any): Observable<any> {
    this.begin();
    return this.http
      .post(url, body || null, {
        params: this.parseParams(params)
      })
      .do(() => this.end())
      .catch((res) => {
        this.end();
        return res;
      });
  }


}
