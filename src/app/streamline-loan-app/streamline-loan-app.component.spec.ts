import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamlineLoanAppComponent } from './streamline-loan-app.component';

describe('StreamlineLoanAppComponent', () => {
  let component: StreamlineLoanAppComponent;
  let fixture: ComponentFixture<StreamlineLoanAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamlineLoanAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamlineLoanAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
