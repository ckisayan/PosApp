import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BorrowerInfoModel } from '../../../shared/Entities/loan-app.typedef';

@Component({
  selector: 'bor-housing-status',
  templateUrl: './bor-housing-status.component.html',
  styleUrls: ['./bor-housing-status.component.css']
})
export class BorHousingStatusComponent implements OnInit {
  private primaryCustomerHousingStatus: boolean=false;
  private primaryCustomerIsRenter: boolean=false;

  @Output() childMenuEvent = new EventEmitter();
  constructor(private borrowerInfo: BorrowerInfoModel) { }

  ngOnInit() {
  }

  setAddrRentOwn(rentstatus: string) {

    this.borrowerInfo.BorRentOwn = rentstatus;
    this.primaryCustomerHousingStatus = true;
    if (rentstatus == 'AddrRent') {
      this.primaryCustomerIsRenter = true;
    }
  }
  initialize(){
    
  }
  saveBorHousingStatus(navigateTo:string){
    if (navigateTo =='next')
      this.navigateNext();
    else
    this.navigatePrevious();
  }
  navigateNext(){
    this.childMenuEvent.emit("spouseBasicInfo");
  }
  navigatePrevious(){
    this.childMenuEvent.emit("primaryBorMailingAddr");
  }
}
