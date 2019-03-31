import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorAddressComponent } from './bor-address.component';

describe('BorAddressComponent', () => {
  let component: BorAddressComponent;
  let fixture: ComponentFixture<BorAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
