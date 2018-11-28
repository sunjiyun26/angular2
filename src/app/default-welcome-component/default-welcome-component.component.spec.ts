import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultWelcomeComponentComponent } from './default-welcome-component.component';

describe('DefaultWelcomeComponentComponent', () => {
  let component: DefaultWelcomeComponentComponent;
  let fixture: ComponentFixture<DefaultWelcomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultWelcomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultWelcomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
