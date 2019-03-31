import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BorrowerInfoModel } from '../../../shared/Entities/loan-app.typedef';

@Component({
  selector: 'spouse-address',
  templateUrl: './spouse-address.component.html',
  styleUrls: ['./spouse-address.component.css']
})
export class SpouseAddressComponent implements OnInit {

  @Output() childMenuEvent = new EventEmitter();
  constructor(private borrowerInfo: BorrowerInfoModel) { }

  ngOnInit() {
  }
  saveSpouseAddress(navigateTo:string){
    if (navigateTo =='next')
      this.navigateNext();
    else
    this.navigatePrevious();
  }
  navigateNext(){
    this.childMenuEvent.emit("spouseMailingAddress");
  }
  navigatePrevious(){
    this.childMenuEvent.emit("spouseAddress");
  }

}
