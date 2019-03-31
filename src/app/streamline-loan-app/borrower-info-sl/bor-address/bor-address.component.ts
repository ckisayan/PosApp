import { Component, OnInit, Input,ElementRef, NgZone, style, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BorAddressModel, BorrowerInfoModel } from '../../../shared/Entities/loan-app.typedef';

declare let $: any;
declare let window: any;

@Component({
  selector: 'bor-address',
  templateUrl: './bor-address.component.html',
  styleUrls: ['./bor-address.component.css']
  
})
export class BorAddressComponent implements OnInit {
  @Input() borAddress: BorAddressModel;
  @Output() childMenuEvent = new EventEmitter();
  constructor(private zone: NgZone,private borrowerInfo: BorrowerInfoModel,) { }

  ngOnInit() {
    //$('#abc').hide
    window.my = window.my || {};
    window.my.namespace = window.my.namespace || {};
  }
  saveCustomerAddress(navigateTo:string){
    if (navigateTo =='next')
    this.navigateNext();
  else
  this.navigatePrevious();
  }
  navigateNext(){
    this.childMenuEvent.emit("primaryBorMailingAddr");
  }
  navigatePrevious(){
    this.childMenuEvent.emit("primaryBorDetails");
  }
}
