import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderViewCreditComponent } from './order-view-credit.component';

describe('OrderViewCreditComponent', () => {
  let component: OrderViewCreditComponent;
  let fixture: ComponentFixture<OrderViewCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderViewCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderViewCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
