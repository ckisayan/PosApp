import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorHousingStatusComponent } from './bor-housing-status.component';

describe('BorHousingExpenseComponent', () => {
  let component: BorHousingStatusComponent;
  let fixture: ComponentFixture<BorHousingStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorHousingStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorHousingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
