import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductPricingComponent } from './loan-product-pricing.component';

describe('LoanProductPricingComponent', () => {
  let component: LoanProductPricingComponent;
  let fixture: ComponentFixture<LoanProductPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanProductPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProductPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
