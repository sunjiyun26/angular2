import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjyEchartsComponent } from './sjy-echarts.component';

describe('SjyEchartsComponent', () => {
  let component: SjyEchartsComponent;
  let fixture: ComponentFixture<SjyEchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjyEchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjyEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
