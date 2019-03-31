import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SubjectPropertyModel } from '../../../shared/Entities/loan-app.typedef';

@Component({
  selector: 'subj-property',
  templateUrl: './subj-property.component.html',
  styleUrls: ['./subj-property.component.css']
})
export class SubjPropertyComponent implements OnInit {
 
  @Input() navigateToScreeen: string;
  @Output() childMenuEvent = new EventEmitter();
  
  constructor(private subjProp: SubjectPropertyModel) { }
  
  
  ngOnInit() {
  } 
  saveSubjectProperty(navigateTo:string){
    if (navigateTo =='next')
    this.navigateNext();
  else
  this.navigatePrevious();
  }
  navigateNext(){
    this.childMenuEvent.emit("basicLoanInfo");
  }
  navigatePrevious(){
    this.childMenuEvent.emit("primaryBorDetails");
  }
  onBlurOccupancyType(){

  }
}
