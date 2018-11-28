import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpServiceService} from './http-service.service';

@NgModule({
  imports: [
    CommonModule,
    HttpServiceService
  ],
  declarations: []
})
export class CoreModule { }
