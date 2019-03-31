import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioPipelineComponent } from './scenario-pipeline.component';

describe('ScenarioPipelineComponent', () => {
  let component: ScenarioPipelineComponent;
  let fixture: ComponentFixture<ScenarioPipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioPipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
