import {Component, OnChanges, OnInit} from '@angular/core';
import {print} from 'util';
import {window} from 'rxjs/operators';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit, OnChanges {

  public name = 'sunjiyun';

  flag = 1;

  constructor() {
    this.name = 'sunjiyun constructor';
    this.flag = 2;
    console.log('info\'s constructor');
    // print('cons');
    // wind
  }

  ngOnInit() {
    this.flag = 3;
    console.log('info\'s init ');
    // print('ngOnInit end');
  }

  ngOnChanges() {
    // print('ngOnInit end');
    console.log('info\'s changes');

  }

}
