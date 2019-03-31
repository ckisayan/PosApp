import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorBasicInfoComponent } from './bor-basic-info.component';

describe('BorBasicInfoComponent', () => {
  let component: BorBasicInfoComponent;
  let fixture: ComponentFixture<BorBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
