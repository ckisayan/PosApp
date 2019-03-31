import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BorrowerInfoModel } from '../../../shared/Entities/loan-app.typedef';

@Component({
  selector: 'spouse-basic-info',
  templateUrl: './spouse-basic-info.component.html',
  styleUrls: ['./spouse-basic-info.component.css']
})
export class SpouseBasicInfoComponent implements OnInit {

  @Output() childMenuEvent = new EventEmitter();
  constructor(private borrowerInfo: BorrowerInfoModel) { }

  ngOnInit() {
  }
  saveSpouseBasicInfo(navigateTo:string){
    if (navigateTo =='next')
      this.navigateNext();
    else
    this.navigatePrevious();
  }
  navigateNext(){
    this.childMenuEvent.emit("spouseAddress");
  }
  navigatePrevious(){
    this.childMenuEvent.emit("primaryBorHousingInfo");
  }
  
  enableCoborrowerSection(data: string) {
    this.borrowerInfo.ApplyingWithSpouse = data;
  }

}
