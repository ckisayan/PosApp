import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoanAssignmentModel } from '../../../shared/Entities/loan-app.typedef';
import { Router } from '@angular/router';
import { ScreenInfo } from '../../../shared/Entities/navigation.typedef';

@Component({
  selector: 'app-employment-income',
  templateUrl: './employment-income.component.html',
  styleUrls: ['./employment-income.component.css']
})
export class EmploymentIncomeComponent implements OnInit {
  private placeHolderAmt: number;
  private breakpoint = 0;
  @Output() childMenuEvent = new EventEmitter();
  constructor(private router: Router,
    private screenInfo: ScreenInfo
    ) { }

  ngOnInit() {
      this.breakpoint = (window.innerHeight <= 400) ? 1 : 6;
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
    console.log ('breakpoint size is:' + this.breakpoint);
  }
  saveEmploymentIncome(navigateTo: string) {
    if (navigateTo === 'next') {
      this.navigateNext();
    } else if (navigateTo === 'OrderVOI') {
      this.orderVOI();
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
  orderVOI() {
    alert ('VOI in progress');
  }
  addAnotherEmploymentClicked() {
    alert('add another employment.');
  }
}
