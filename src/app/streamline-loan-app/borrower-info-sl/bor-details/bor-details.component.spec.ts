import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorDetailsComponent } from './bor-details.component';

describe('BorDetailsComponent', () => {
  let component: BorDetailsComponent;
  let fixture: ComponentFixture<BorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
