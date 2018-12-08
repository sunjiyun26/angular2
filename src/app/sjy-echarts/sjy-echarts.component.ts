import {Component, OnInit} from '@angular/core';
import {EChartOption} from 'echarts';
import * as $ from 'jquery';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {BaseDateService} from '../core/base-date.service';
import {NgZorroAntdModule} from 'ng-zorro-antd';


@Component({
  selector: 'app-sjy-echarts',
  templateUrl: './sjy-echarts.component.html',
  styleUrls: ['./sjy-echarts.component.css'],
  providers: [BaseDateService],
})
export class SjyEchartsComponent implements OnInit {
  // NgxEchartsModule
  options: any;
  days;
  String;
  endDate: string;
  beginDate: string;
  rest: number = 4.4 / 100;
  rest55: number = 5.5 / 100;

  principalRest038: number = 0.38 / 100;
  principalRest055: number = 0.55 / 100;
  principalRest066: number = 0.66 / 100;

  chartOption: EChartOption = {
    // xAxis: {
    //   type: 'category',
    //   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    // },
    yAxis: {
      type: 'value'
    }
    // series: [{
    //   // data: [820, 932, 901, 934, 1290, 1330, 1320],
    //   type: 'line'
    // }]
  };
  private a2: number;

  constructor(private baseDate: BaseDateService) {
  }

  ngOnInit() {
    // graphic.LinearGradient(this.chartOption);
    // alert($('#testjq').text());
    this.days = '2018-11-29';
    let days1 = this.getdays(5);
    let x = days1['x'];
    let y = days1['y'];

    this.chartOption.series = [];
    this.chartOption.xAxis = {};
    this.chartOption.series[0] = {
      data: y,
      type: 'line'
    };
    // xAxis: {
    //   type: 'category',
    //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    // },
    this.chartOption.xAxis = {
      type: 'category',
      data: x
    };

  }

  getRest038(money: number, days: number) {
    // 扣款金额除以天数为每天的利息
    let abnc: number;
    abnc = (money * this.principalRest038) / days;
    let _rest038: number;
    _rest038 = abnc * 365 / money;

    return _rest038;

  }

  getRest055(money: number, days: number) {
    // 扣款金额除以天数为每天的利息
    let abnc: number;
    abnc = (money * this.principalRest055) / days;
    let _rest038: number;
    _rest038 = abnc * 365 / money;

    return _rest038;

  }

  getRest066(money: number, days: number) {
    // 扣款金额除以天数为每天的利息
    let abnc: number;
    abnc = (money * this.principalRest066) / days;
    let _rest038: number;
    _rest038 = abnc * 365 / money;

    return _rest038;

  }


  getdays(dueDate: number) {
    let lixi: number;
    const dayDiff = 50;
    let _map: object;
    let dats: string[] = [];
    let nums: number[] = [];
    _map = {};
    for (let i: number = dayDiff; i > 0; i--) {
      let days1 = this.baseDate.addDays(new Date(), i);
      dats.push(this.baseDate.FormatToDay(days1));
      // console.log(days1);
      let rest038 = this.getRest038(1000, i);
//   NumberFormat formatter = new DecimalFormat("#0.00");
//   NumberFormat formatter2 = new DecimalFormat("#0.000000");
//   NumberFormat formatter1 = new DecimalFormat("#.##%");
// //			System.out.println("1000 " + i + "> " + interest);
// //			System.out.println("1000 " + i + "> " + formatter1.format(interest));
//   String dayDiffStr = String.valueOf(dayDiff);
//   double d = Double.parseDouble(dayDiffStr);
// System.out.println("年利率差 百分之" + formatter.format((rest - interest) * 100));
//       this.baseDate.addDays(Date)
      console.log('年利率差 百分之' +  Number((this.rest55 - rest038) * 100).toFixed(2));
      console.log(rest038);
      lixi = (((this.rest55 - rest038)) / 365) * 1000 * i;
      nums.push(lixi);
      console.log(lixi);
    }
    _map['x'] = dats;
    _map['y'] = nums;

    return _map;

  }

  onSubmit(value): void {
    console.log(value);
    // for (const control of this.validateForm.controls) {
    //   control.markAsDirty();
    //   control.updateValueAndValidity();
    // }

  }


}
