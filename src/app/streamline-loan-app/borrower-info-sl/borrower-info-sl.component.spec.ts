import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerInfoSlComponent } from './borrower-info-sl.component';

describe('BorrowerInfoSlComponent', () => {
  let component: BorrowerInfoSlComponent;
  let fixture: ComponentFixture<BorrowerInfoSlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowerInfoSlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerInfoSlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
