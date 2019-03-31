import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BorrowerInfoModel } from '../../../shared/Entities/loan-app.typedef';

@Component({
  selector: 'bor-mailing-addr',
  templateUrl: './bor-mailing-addr.component.html',
  styleUrls: ['./bor-mailing-addr.component.css']
})
export class BorMailingAddrComponent implements OnInit {
  @Output() childMenuEvent = new EventEmitter();
  constructor(private borrowerInfo: BorrowerInfoModel) { }

  ngOnInit() {
  }
  saveCustomerMailingAddress(navigateTo:string){
    if (navigateTo =='next')
      this.navigateNext();
    else
    this.navigatePrevious();
  }
  navigateNext(){
    this.childMenuEvent.emit("primaryBorHousingInfo");
  }
  navigatePrevious(){
    this.childMenuEvent.emit("primaryBorAddr");
  }
}
