import { Component, OnInit, Input, Output } from '@angular/core';
import { BorrowerInfoModel } from '../../../shared/Entities/loan-app.typedef';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-bor-basic-info',
  templateUrl: './bor-basic-info.component.html',
  styleUrls: ['./bor-basic-info.component.css']
})
export class BorBasicInfoComponent implements OnInit {
  @Input() navigateToScreeen: string;
  @Output() childMenuEvent = new EventEmitter();
  constructor(private borrowerInfo: BorrowerInfoModel) {

  }
  setServedInMilitary(data: string) {
    this.borrowerInfo.ServedInMilitary = data;
  }
  ngOnInit() {
  }
  createCustomer() {
    console.log('creating customer');
    this.navigateNext();
  }
  navigateNext() {
    this.childMenuEvent.emit('primaryBorDetails');
  }
  continueWithLoanApp() {
    console.log('continue with loan app');
    this.childMenuEvent.emit('primaryBorDetails');
  }
  inviteCustomer() {
    console.log('invite customer');
    this.createCustomer();
  }
}
