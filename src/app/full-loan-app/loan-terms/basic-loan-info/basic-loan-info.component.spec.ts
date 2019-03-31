import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLoanInfoComponent } from './basic-loan-info.component';

describe('BasicLoanInfoComponent', () => {
  let component: BasicLoanInfoComponent;
  let fixture: ComponentFixture<BasicLoanInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicLoanInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLoanInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
