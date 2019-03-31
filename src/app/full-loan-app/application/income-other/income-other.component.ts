import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoanAssignmentModel } from '../../../shared/Entities/loan-app.typedef';
import { Router } from '@angular/router';
import { ScreenInfo } from '../../../shared/Entities/navigation.typedef';

@Component({
  selector: 'app-income-other',
  templateUrl: './income-other.component.html',
  styleUrls: ['./income-other.component.css']
})
export class IncomeOtherComponent implements OnInit {
  @Output() childMenuEvent = new EventEmitter();
  private addOtherIncome = false;
  constructor(private router: Router,
    private screenInfo: ScreenInfo
    ) { }

  ngOnInit() {
  }
  saveOtherIncome(navigateTo: string) {
    if (navigateTo === 'Cancel' || navigateTo === 'SaveClose') {
      this.addOtherIncome = false;
      return;
    }
    if (navigateTo === 'next') {
      this.navigateNext();
    } else {
      this.navigatePrevious();
    }
  }
  navigateNext() {
    this.childMenuEvent.emit('borBasicInfo');
  }
  navigatePrevious() {
    this.childMenuEvent.emit('spouseMailingAddress');
  }
  addAnotherOtherIncome() {
    this.addOtherIncome = true;
  }
}
