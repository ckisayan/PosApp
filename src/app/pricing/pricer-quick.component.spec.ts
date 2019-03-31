import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { PricerQuickComponent } from './pricer-quick.component';

describe('PricerQuickComponent', () => {
  let component: PricerQuickComponent;
  let fixture: ComponentFixture<PricerQuickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricerQuickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricerQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
