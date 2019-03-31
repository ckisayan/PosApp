import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricerQuickResults } from './pricer-quick-results.component';

describe('PricerQuickResultsComponent', () => {
  let component: PricerQuickResults;
  let fixture: ComponentFixture<PricerQuickResults>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricerQuickResults ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricerQuickResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
