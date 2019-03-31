import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditPublicRecordsComponent } from './credit-public-records.component';

describe('CreditPublicRecordsComponent', () => {
  let component: CreditPublicRecordsComponent;
  let fixture: ComponentFixture<CreditPublicRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditPublicRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditPublicRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
