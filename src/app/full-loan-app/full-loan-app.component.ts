import { Component, OnInit } from '@angular/core';
import {BorrowerInfoComponent} from './borrower-info/borrower-info.component';
import {Router} from '@angular/router';
import {ScreenInfo, SessionInfoModel} from '../shared/Entities/navigation.typedef';

import {  ViewChild, ElementRef } from '@angular/core';
// import { BorAddressModel } from "..//shared/Entities/loan-app.typedef";


import { FormControl } from '@angular/forms';
import { BidiModule } from '@angular/cdk/bidi';
import { MatSidenav, MatStepper, MatTab } from '@angular/material';
import { Platform } from '@angular/cdk/platform';

import { BorrowerPartitionScreens} from '../shared/infrastructure/global-constants';
import { Conditional } from '@angular/compiler';

import $ = require('jquery');

@Component({
  selector: 'app-full-loan-app',
  templateUrl: './full-loan-app.component.html',
  styleUrls: ['./full-loan-app.component.css']
})
export class FullLoanAppComponent implements OnInit {
  @ViewChild('loanapptabs') private myloanapptabs: MatTab;
  @ViewChild('borrowerInfo') private borInfoComp: BorrowerInfoComponent;
  private selectedTab: number;
  constructor (private router: Router,
  private screenInfo: ScreenInfo) { }

  ngOnInit() {
    this.setTab();
    SessionInfoModel.SetSessionContextToLoan('123');
  }
  setTab() {
    this.selectedTab = 4;
    // this.ActivateBorrwerInfoTab();
  }
  /*
  ngAfterViewInit(){
    this.borInfoComp.openSideNav();
  }
  */
  ActivateBorrwerInfoTab() {
    console.log('borrower tab being activated');
    // $(document).ready(function () {
    this.borInfoComp.openSideNav();
    // });
    console.log('borrower tab being activated');
  }

}
