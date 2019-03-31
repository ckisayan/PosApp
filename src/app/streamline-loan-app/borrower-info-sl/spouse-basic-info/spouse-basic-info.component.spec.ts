import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpouseBasicInfoComponent } from './spouse-basic-info.component';

describe('SpouseBasicInfoComponent', () => {
  let component: SpouseBasicInfoComponent;
  let fixture: ComponentFixture<SpouseBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpouseBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpouseBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
