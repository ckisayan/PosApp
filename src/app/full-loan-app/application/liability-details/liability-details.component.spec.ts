import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiabilityDetailsComponent } from './liability-details.component';

describe('ReoLiabilityDetailsComponent', () => {
  let component: LiabilityDetailsComponent;
  let fixture: ComponentFixture<LiabilityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiabilityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiabilityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
