import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {formatNumber, registerLocaleData} from '@angular/common';

import {AppComponent} from './app.component';
import {FirstComponentComponent} from './first-component/first-component.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import zh from '@angular/common/locales/zh';
import {DefaultWelcomeComponentComponent} from './default-welcome-component/default-welcome-component.component';
import { SjyEchartsComponent } from './sjy-echarts/sjy-echarts.component';
import { NgxEchartsModule } from 'ngx-echarts';

registerLocaleData(zh);

const appRoutes: Routes = [
  {path: 'crisis-center', component: FirstComponentComponent},
  {path: 'crisis-center2', component: SjyEchartsComponent},
  {
    path: '',
    component: DefaultWelcomeComponentComponent
  },
  {
    path: '**',
    component: DefaultWelcomeComponentComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DefaultWelcomeComponentComponent,
    SjyEchartsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,

    NgxEchartsModule


  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
