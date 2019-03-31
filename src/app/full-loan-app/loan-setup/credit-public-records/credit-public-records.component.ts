import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';

// MatNativeDateModule, MatMomentDateModule

@Component({
  selector: 'app-credit-public-records',
  templateUrl: './credit-public-records.component.html',
  styleUrls: ['./credit-public-records.component.css']
})
export class CreditPublicRecordsComponent implements OnInit {

  @Input() navigateToScreeen: string;
  @Output() childMenuEvent = new EventEmitter();

  /* = [
    {CreditReportDate: "04/12/2018", CreditReportIdentifier:"1232", ApplicaitonIdentifier:"1"},
    {CreditReportDate: "05/13/2018", CreditReportIdentifier:"1237", ApplicaitonIdentifier:"2"},
];
    */

  constructor() {



  }


  ngOnInit() {
  }
  saveOrderViewCredit(navigateTo: string) {
    if (navigateTo === 'next') {
      this.navigateNext();
    } else {
      this.navigatePrevious();
    }
  }
  navigateNext() {
    this.childMenuEvent.emit('primaryBorMain');
  }
  navigatePrevious() {
    this.childMenuEvent.emit('orderViewCredit');
  }

}
