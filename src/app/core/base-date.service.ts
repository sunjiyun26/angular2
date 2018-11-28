import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseDateService {

  /**
   * 获取当前日期:20170718
   *
   * @returns{string}
   * @memberofBaseDate
   */
  getDateNow(): string {
    let dateNow: Date;
    let year: number;
    dateNow = new Date();
    year = dateNow.getFullYear();
    let month: string | number = dateNow.getMonth() + 1;
    let day: string | number = dateNow.getDate();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    return year + '' + month + '' + day;
  }

  /**
   * 格式化日期 格式化后：20170718
   *
   * @param{Date}date
   * @returns{string}
   * @memberofBaseDate
   */
  formatDate(date: Date): string {
    let year: number;
    let dateNow: Date;
    dateNow = date;
    year = dateNow.getFullYear();
    let month: string | number = dateNow.getMonth() + 1;
    let day: string | number = dateNow.getDate();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    return year + '' + month + '' + day;
  }

  /**
   * 获取当前时间-分钟
   *
   * @static
   * @returns{string}
   * @memberofBaseDate
   */
  getCurrentMinutesTostring(): string {
    let date: any;
    date = new Date();
    let minute: string;
    minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes().toString();
    return minute;
  }

  /**
   * 获取当日期格式化至小时
   *
   * @static
   * @returns{string}
   * @memberofBaseDate
   */
  getCurrentDateToString_ss(): string {
    let minute: string | number;
    let hour: string | number;
    let year: number;
    let date: Date;
    date = new Date();
    year = date.getFullYear();
    let month: string | number = date.getMonth() + 1;
    let day: string | number = date.getDate();
    hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    return year + '' + month + '' + day + ':' + hour; // + "" + minute;
  }


  /**
   * 获取当前时间的前一个小时
   *
   * @static
   * @param{number}addHours
   * @returns{string}
   * @memberofBaseDate
   */
  getAddHour(date: Date, hour: number): string {
    let date_hour: any;
    date_hour = new Date(date.setHours(date.getHours() + hour));
    return this.FormatTohh(date_hour);
  }

  /**
   * 获取当前时间的前一个小时
   *
   * @static
   * @param{number}addHours
   * @returns{string}
   * @memberofBaseDate
   */
  getAddHours(date: Date, hour: number) {
    let date_hour: Date;
    date_hour = new Date(date.setHours(date.getHours() + hour));
    return date.getHours();
  }

  /**
   * 获取当前时间的前一天
   *
   * @static
   * @param{number}addHours
   * @returns{string}
   * @memberofBaseDate
   */
  getAddDay(date: Date, day: number) {
    let date_day: Date;
    date_day = new Date(date.setDate(date.getDate() + day));
    return this.FormatToDay(date_day);
  }

  /**
   * 格式化到小时
   *
   * @static
   * @param{Date}date
   * @returns
   * @memberofBaseDate
   */
  FormatToDay(date: Date) {
    let year: number;
    year = date.getFullYear();
    let month: string | number = date.getMonth() + 1;
    let day: string | number = date.getDate();
    // let  hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    // let  minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    // return new Date(year, month, day);
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    return year + '' + month + '' + day; // + ":" + hour; // + "" + minute;
  }

  /**
   * 格式化到小时
   *
   * @static
   * @param{Date}date
   * @returns
   * @memberofBaseDate
   */
  FormatTohh(date: Date) {

    let hour: string | number;
    let year: number;
    year = date.getFullYear();
    let month: string | number = date.getMonth() + 1;
    let day: string | number = date.getDate();
    hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minute: string | number;
    minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    return year + '' + month + '' + day + ':' + hour; // + "" + minute;
  }

  /**
   * 获取当前小时
   *
   * @static
   * @returns{string}
   * @memberofBaseDate
   */
  getCurrentHour(): string {
    let date: Date;
    date = new Date();
    return date.getHours() < 10 ? '0' + date.getHours() : date.getHours() + '';
  }

  /**
   * 添加日
   *
   * @param{Date}date 日期
   * @param{number}days
   * @returns{Date}
   * @memberofBaseDate
   */
  addDays(date: Date, days: number): Date {
    return new Date(date.setDate(date.getDate() + days));
  }

  /**
   * 差值 天数
   * @param beginDate
   * @param endDate
   */
  getDvalueDays(beginDate: string, endDate: string): number {
    let dateBegin = this.stringToDate(beginDate, 'yyyy-MM-dd', '-');
    let dateEnd = this.stringToDate(endDate, 'yyyy-MM-dd', '-');
    // 如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    let dateDiff = dateEnd.getTime() - dateBegin.getTime();

    let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));
    let leave1 = dateDiff % (24 * 3600 * 1000);
    let hours = Math.floor(leave1 / (3600 * 1000));
    // 计算相差分钟数
    let leave2 = leave1 % (3600 * 1000);
    let minutes = Math.floor(leave2 / (60 * 1000));
    let leave3 = leave2 % (60 * 1000);
    let seconds = Math.round(leave3 / 1000);
    console.log(' 相差 ' + dayDiff + '天 ');
    // console.log(dateDiff + '时间差的毫秒数', dayDiff + '计算出相差天数', leave1 + '计算天数后剩余的毫秒数'
    //   , hours + '计算出小时数', minutes + '计算相差分钟数', seconds + '计算相差秒数');

    return 0;
  }

  /**
   * 时间从字符串转换成date
   stringToDate("17/9/2014","dd/MM/yyyy","/");
   stringToDate("9/17/2014","mm/dd/yyyy","/")
   stringToDate("9-17-2014","mm-dd-yyyy","-")
   * @param _date
   * @param _format
   * @param _delimiter
   */
  stringToDate(_date: string, _format: string, _delimiter: string): Date {
    let monthIndex: number;
    let dateItems: string[];
    let formatItems: string[];
    let formatLowerCase: string;
    let numberMonth: number;
    let yearIndex: number;
    let DateFormated: Date;
    formatLowerCase = _format.toLowerCase();
    formatItems = formatLowerCase.split(_delimiter);
    dateItems = _date.split(_delimiter);
    monthIndex = formatItems.indexOf('mm');
    let dayIndex: number = formatItems.indexOf('dd');
    yearIndex = formatItems.indexOf('yyyy');
    numberMonth = parseInt(dateItems[monthIndex], 10);
    let month: number = numberMonth;
    month = month - 1;

    DateFormated = new Date(Number.parseInt(dateItems[yearIndex], 10), month, Number.parseInt(dateItems[dayIndex], 10));
    return DateFormated;
  }

  // stringToDate("17/9/2014","dd/MM/yyyy","/");
  // stringToDate("9/17/2014","mm/dd/yyyy","/")
  // stringToDate("9-17-2014","mm-dd-yyyy","-")

}
