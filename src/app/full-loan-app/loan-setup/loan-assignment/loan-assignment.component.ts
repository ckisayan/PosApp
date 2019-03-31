import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoanAssignmentModel } from '../../../shared/Entities/loan-app.typedef';
import { Router } from '@angular/router';
import { ScreenInfo } from '../../../shared/Entities/navigation.typedef';


@Component({
  selector: 'app-loan-assignment',
  templateUrl: './loan-assignment.component.html',
  styleUrls: ['./loan-assignment.component.css']
})
export class LoanAssignmentComponent implements OnInit {
  @Output() childMenuEvent = new EventEmitter();
  constructor(private router: Router,
    private screenInfo: ScreenInfo,
    private loanAssignment: LoanAssignmentModel, ) { }

  ngOnInit() {
  }
  saveAssignmentInfo(navigateTo: string) {
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
}
