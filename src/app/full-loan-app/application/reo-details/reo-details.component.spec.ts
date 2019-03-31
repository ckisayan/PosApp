import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReoDetailsComponent } from './reo-details.component';

describe('ReoDetailsComponent', () => {
  let component: ReoDetailsComponent;
  let fixture: ComponentFixture<ReoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
