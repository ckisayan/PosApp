import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorMailingAddrComponent } from './bor-mailing-addr.component';

describe('BorMailingAddrComponent', () => {
  let component: BorMailingAddrComponent;
  let fixture: ComponentFixture<BorMailingAddrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorMailingAddrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorMailingAddrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
