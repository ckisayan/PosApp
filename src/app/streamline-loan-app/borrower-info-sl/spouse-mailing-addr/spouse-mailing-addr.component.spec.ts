import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpouseMailingAddrComponent } from './spouse-mailing-addr.component';

describe('SpouseMailingAddrComponent', () => {
  let component: SpouseMailingAddrComponent;
  let fixture: ComponentFixture<SpouseMailingAddrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpouseMailingAddrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpouseMailingAddrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
