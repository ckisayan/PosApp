import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjPropertyComponent } from './subj-property.component';

describe('SubjPropertyComponent', () => {
  let component: SubjPropertyComponent;
  let fixture: ComponentFixture<SubjPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
