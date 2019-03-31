import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { OrderViewCreditModel, CreditReportDataModel } from '../../../shared/Entities/loan-app.typedef';

import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-order-view-credit',
  templateUrl: './order-view-credit.component.html',
  styleUrls: ['./order-view-credit.component.css']
})

export class OrderViewCreditComponent implements OnInit {

  @Input() navigateToScreeen: string;
  @Output() childMenuEvent = new EventEmitter();
  @ViewChild(MatSort) sort: MatSort;

  private CREDIT_REPORT_DATA: CreditReportDataModel[] = [];
  /* = [
    {CreditReportDate: "04/12/2018", CreditReportIdentifier:"1232", ApplicaitonIdentifier:"1"},
    {CreditReportDate: "05/13/2018", CreditReportIdentifier:"1237", ApplicaitonIdentifier:"2"},
];
    */

  private dataSource: any;
  private displayedColumns:  ['CreditReportDate', 'CreditReportIdentifier'];

  constructor(private orderCredit: OrderViewCreditModel) {

    let crd = new CreditReportDataModel();
    crd.ApplicaitonIdentifier = '1';
    crd.CreditReportDate = '04/04/2018';
    crd.CreditReportIdentifier = '123';
    this.CREDIT_REPORT_DATA.push(crd);
    crd = new CreditReportDataModel();
    crd.ApplicaitonIdentifier = '2';
    crd.CreditReportDate = '04/05/2018';
    crd.CreditReportIdentifier = '124';
    this.CREDIT_REPORT_DATA.push(crd);
    console.log (this.CREDIT_REPORT_DATA);
    this.dataSource = new MatTableDataSource(this.CREDIT_REPORT_DATA);
    console.log (this.dataSource);
   // this.displayedColumns = ['CreditReportDate', 'CreditReportIdentifier'];;
  }


  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  saveOrderViewCredit(navigateTo: string) {
    if (navigateTo === 'next') {
      this.navigateNext();
    } else {
      this.navigatePrevious();
    }
  }
  navigateNext() {
    this.childMenuEvent.emit('creditPublicRecords');
  }
  navigatePrevious() {
    this.childMenuEvent.emit('spouseMailingAddress');
  }
  openCreditReport(creditReportId: string) {
    window.open('..//../../../assets/samples/Sample-Credit-Report-Equifax.pdf', '_blank');
  }


}
