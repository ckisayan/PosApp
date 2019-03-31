import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BorrowerInfoModel } from '../../../shared/Entities/loan-app.typedef';

@Component({
  selector: 'bor-details',
  templateUrl: './bor-details.component.html',
  styleUrls: ['./bor-details.component.css']
})
export class BorDetailsComponent implements OnInit {
  @Output() childMenuEvent = new EventEmitter();
  constructor(private borrowerInfo: BorrowerInfoModel,) { }

  ngOnInit() {
  
  }
  saveBorDetails(navigateTo:string){
    if (navigateTo =='next')
    this.navigateNext();
  else
  this.navigatePrevious();
  }
  navigateNext(){
    this.childMenuEvent.emit("primaryBorAddr");
  }
  navigatePrevious(){
    this.childMenuEvent.emit("primaryBorMain");
  }
  setBorMaritalStatus(maritalStatus){
    this.borrowerInfo.BorMaritalStatus = maritalStatus;
  }
}
