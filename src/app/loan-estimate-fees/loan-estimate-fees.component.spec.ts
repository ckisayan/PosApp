import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanEstimateFeesComponent } from './loan-estimate-fees.component';

describe('LoanEstimateFeesComponent', () => {
  let component: LoanEstimateFeesComponent;
  let fixture: ComponentFixture<LoanEstimateFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanEstimateFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanEstimateFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
