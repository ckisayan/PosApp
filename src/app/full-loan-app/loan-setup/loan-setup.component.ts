import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { ScreenInfo } from '../../shared/Entities/navigation.typedef';
import { BorrowerInfoModel } from '../../shared/Entities/loan-app.typedef';


import { FormControl } from '@angular/forms';
import { BidiModule } from '@angular/cdk/bidi';

// import $ from 'jquery';

import { BorrowerPartitionScreens} from '../../shared/infrastructure/global-constants';

@Component({
  selector: 'app-loan-setup',
  templateUrl: './loan-setup.component.html',
  styleUrls: ['./loan-setup.component.css']
})
export class LoanSetupComponent implements OnInit {
  // private primaryCustomerIsRenter = false;
  // private primaryCustomerHousingStatus = false;
  // private continueWithSpouseSection = false;
  // private coBorSectionEnabledFlag = false;
  // private servedInMilitearySectionEnabled = false;

  private loanAssigmentVisible = false;
  private borBasicInfoVisible = false;
  private primaryBorAddrVisible = false;
  private primaryBorHousingInfoVisible = false;
  private primaryBorMailingAddrVisible = false;
  private spouseBasicInfoVisible = false;
  private spouseAddressVisible = false;
  private spouseMailingAddressVisible = false;
  private orderViewCreditVisible = false;
  private primaryBorDetailsVisible = false;

  @ViewChild('loanSetupSideNav') private loanSetupSideNav: MatSidenav;
  @ViewChild('loanAssigment') private loanAssigment: ElementRef;
  @ViewChild('borBasicInfo') private borBasicInfo: ElementRef;
  @ViewChild('primaryBorAddr') private primaryBorAddr: ElementRef;
  @ViewChild('orderViewCredit') private orderViewCredit: ElementRef;
  @ViewChild('primaryBorDetails') private primaryBorDetails: ElementRef;
  constructor(private router: Router,
    platform: Platform,
    private screenInfo: ScreenInfo,
    private borrowerInfo: BorrowerInfoModel

) { }


ngOnInit() {

  this.navigateToSection('default');
  this.openSideNavigation();
}

openSideNavigation() {
  console.log('loan terms side nav open.');
  this.loanSetupSideNav.open();
}
navigateToSection(menuItemSelected) {
  this.setAllMenuItemsUnselected();
  this.hideAllWorkspaces();
  this.setMenuItemsSelected(menuItemSelected);
}
hideAllWorkspaces() {
  this.loanAssigmentVisible = false;
  this.borBasicInfoVisible = false;
  this.primaryBorAddrVisible = false;
  this.orderViewCreditVisible = false;
  this.primaryBorDetailsVisible = false;
}


setAllMenuItemsUnselected() {
  this.loanAssigment.nativeElement.className = 'side-menu-section-common sectionNotClicked';
  this.borBasicInfo.nativeElement.className = 'side-menu-section-common sectionNotClicked';
  this.primaryBorAddr.nativeElement.className = 'side-menu-section-common sectionNotClicked';
  this.orderViewCredit.nativeElement.className = 'side-menu-section-common sectionNotClicked';
  this.primaryBorDetails.nativeElement.className = 'side-menu-section-common sectionNotClicked';

  /*
  this.primaryBorHousingInfo.nativeElement.className = 'side-menu-section-common sectionNotClicked';
  this.primaryBorMailingAddr.nativeElement.className = 'side-menu-section-common sectionNotClicked';
  this.spouseBasicInfo.nativeElement.className = 'side-menu-section-common sectionNotClicked';
  this.spouseAddress.nativeElement.className = 'side-menu-section-common sectionNotClicked';
  this.spouseMailingAddress.nativeElement.className = 'side-menu-section-common sectionNotClicked';
  */
}

setMenuItemsSelected(menuItemSelected) {
  switch (menuItemSelected) {
    case 'loanAssigment': {
      this.loanAssigment.nativeElement.className = 'side-menu-section-common sectionClicked';
      this.loanAssigmentVisible = true;
      break;
    }
    case 'borBasicInfo': {
      this.borBasicInfo.nativeElement.className = 'side-menu-section-common sectionClicked';
      this.borBasicInfoVisible = true;
      break;
    }
    case 'primaryBorAddr': {
      this.primaryBorAddr.nativeElement.className = 'side-menu-section-common sectionClicked';
      this.primaryBorAddrVisible = true;
      break;
    }
    case 'orderViewCredit': {
      this.orderViewCredit.nativeElement.className = 'side-menu-section-common sectionClicked';
      this.orderViewCreditVisible = true;
      break;
    }
    case 'primaryBorDetails': {
      this.primaryBorDetails.nativeElement.className = 'side-menu-section-common sectionClicked';
      this.primaryBorDetailsVisible = true;
      break;
    }

    default: {
      this.loanAssigment.nativeElement.className = 'side-menu-section-common sectionClicked';
      this.loanAssigmentVisible = true;
      break;
    }
  }
}
navigateNext(menuItem) {
  console.log(menuItem);
  this.navigateToSection(menuItem);
}


}
