import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BorrowerInfoModel } from '../../../shared/Entities/loan-app.typedef';

@Component({
  selector: 'app-spouse-mailing-addr',
  templateUrl: './spouse-mailing-addr.component.html',
  styleUrls: ['./spouse-mailing-addr.component.css']
})
export class SpouseMailingAddrComponent implements OnInit {

  @Output() childMenuEvent = new EventEmitter();
  constructor(private borrowerInfo: BorrowerInfoModel) { }

  ngOnInit() {
  }
  saveSpouseMailingAddr(navigateTo: string) {
    if (navigateTo === 'next') {
      this.navigateNext();
    } else {
    this.navigatePrevious();
    }
  }
  navigateNext() {
    this.childMenuEvent.emit('orderViewCredit');
  }
  navigatePrevious() {
    this.childMenuEvent.emit('spouseAddress');
  }

}
