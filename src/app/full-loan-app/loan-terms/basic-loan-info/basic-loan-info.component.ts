import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SubjectPropertyModel, LoanDetailModel } from '../../../shared/Entities/loan-app.typedef';

@Component({
  selector: 'app-basic-loan-info',
  templateUrl: './basic-loan-info.component.html',
  styleUrls: ['./basic-loan-info.component.css']
})
export class BasicLoanInfoComponent implements OnInit {

  @Input() navigateToScreeen: string;
  @Output() childMenuEvent = new EventEmitter();
  constructor(private subjProp: SubjectPropertyModel, private loanDetail: LoanDetailModel) { }

  ngOnInit() {
  }
  saveSubjectProperty(navigateTo: string) {
    if (navigateTo === 'next') {
    this.navigateNext();
    } else {
  this.navigatePrevious();
    }
  }
  navigateNext() {
    this.childMenuEvent.emit('basicLoanInfo');
  }
  navigatePrevious() {
    this.childMenuEvent.emit('propertyInfo');
  }

}
