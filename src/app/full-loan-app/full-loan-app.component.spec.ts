import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLoanAppComponent } from './full-loan-app.component';

describe('FullLoanAppComponent', () => {
  let component: FullLoanAppComponent;
  let fixture: ComponentFixture<FullLoanAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLoanAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLoanAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
