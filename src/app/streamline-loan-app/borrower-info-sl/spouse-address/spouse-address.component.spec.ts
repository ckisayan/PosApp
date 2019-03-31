import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpouseAddressComponent } from './spouse-address.component';

describe('SpouseAddressComponent', () => {
  let component: SpouseAddressComponent;
  let fixture: ComponentFixture<SpouseAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpouseAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpouseAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
