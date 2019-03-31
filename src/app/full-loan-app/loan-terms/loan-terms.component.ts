import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BorrowerInfoModel } from '../../shared/Entities/loan-app.typedef';

import { Router } from '@angular/router';
import { ScreenInfo } from '../../shared/Entities/navigation.typedef';
import { FormControl } from '@angular/forms';
import { BidiModule } from '@angular/cdk/bidi';
import { MatSidenav, MatStepper } from '@angular/material';
import { Platform } from '@angular/cdk/platform';
// import $ from 'jquery';

import { BorrowerPartitionScreens} from '../../shared/infrastructure/global-constants';

@Component({
  selector: 'app-loan-terms',
  templateUrl: './loan-terms.component.html',
  styleUrls: ['./loan-terms.component.css']
})
export class LoanTermsComponent implements OnInit {

  private propertyInfoVisible = false;
  private basicLoanInfoVisible = false;
  private loanProductPricingVisible = false;
  private loanFeeSheetVisible = false;
  private loanScenariosVisible = false;


  @ViewChild('loantermssidenav') private loantermssidenav: MatSidenav;
  @ViewChild('propertyInfo') private propertyInfo: ElementRef;
  @ViewChild('basicLoanInfo') private basicLoanInfo: ElementRef;
  @ViewChild('loanProductPricing') private loanProductPricing: ElementRef;
  @ViewChild('loanFeeSheet') private loanFeeSheet: ElementRef;
  @ViewChild('loanScenarios') private loanScenarios: ElementRef;


  constructor(private router: Router,
    platform: Platform,
    private screenInfo: ScreenInfo) {

    }

  ngOnInit() {

    this.navigateSideNavSection('default');
    this.openSideNavigation();

  }
  openSideNavigation() {
    console.log('loan terms side nav open.');
    this.loantermssidenav.open();
  }
  navigateNext(menuItem) {
    console.log(menuItem);
    this.navigateSideNavSection(menuItem);
  }

  navigateSideNavSection(menuItemSelected) {

    this.setAllMenuItemsUnselected();
    this.hideAllWorkspaces();
    this.setMenuItemsSelected(menuItemSelected);
  }
  hideAllWorkspaces() {
    this.propertyInfoVisible = false;
    this.basicLoanInfoVisible = false;
    this.loanProductPricingVisible = false;
    this.loanFeeSheetVisible = false;
    this.loanScenariosVisible = false;

  }

  setAllMenuItemsUnselected() {
    this.propertyInfo.nativeElement.className = 'side-menu-section-common sectionNotClicked';
    this.basicLoanInfo.nativeElement.className = 'side-menu-section-common sectionNotClicked';
    this.loanProductPricing.nativeElement.className = 'side-menu-section-common sectionNotClicked';
    this.loanFeeSheet.nativeElement.className = 'side-menu-section-common sectionNotClicked';
    this.loanScenarios.nativeElement.className = 'side-menu-section-common sectionNotClicked';

  }
  setMenuItemsSelected(menuItemSelected) {
    switch (menuItemSelected) {
      case 'propertyInfo': {
        this.propertyInfo.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.propertyInfoVisible = true;
        break;
      }
      case 'basicLoanInfo': {
        this.basicLoanInfo.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.basicLoanInfoVisible = true;
        break;
      }
      case 'loanProductPricing': {
        this.loanProductPricing.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.loanProductPricingVisible = true;
        break;
      }
      case 'loanFeeSheet': {
        this.loanFeeSheet.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.loanFeeSheetVisible = true;
        break;
      }
      case 'loanScenarios': {
        this.loanScenarios.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.loanScenariosVisible = true;
        break;
      }
      default: {
        this.propertyInfo.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.propertyInfoVisible = true;
        break;
      }
    }

  }

}
