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
  selector: 'app-borrower-info-sl',
  templateUrl: './borrower-info-sl.component.html',
  styleUrls: ['./borrower-info-sl.component.css']
})
export class BorrowerInfoSlComponent implements OnInit {
  // private primaryCustomerAddressProvidedFlag: boolean = false;
  private primaryCustomerIsRenter = false;
  private primaryCustomerHousingStatus = false;
  private continueWithSpouseSection = false;
  private coBorSectionEnabledFlag = false;
  private servedInMilitearySectionEnabled = false;

  private primaryBorMainVisible = false;
  private primaryBorDetailsVisible = false;
  private primaryBorAddrVisible = false;
  private primaryBorHousingInfoVisible = false;
  private primaryBorMailingAddrVisible = false;
  private spouseBasicInfoVisible = false;
  private spouseAddressVisible = false;
  private spouseMailingAddressVisible = false;

  @ViewChild('borsidenav') private borsidenav: MatSidenav;
  @ViewChild('primaryBorMain') private primaryBorMain: ElementRef;
  @ViewChild('primaryBorDetails') private primaryBorDetails: ElementRef;
  @ViewChild('primaryBorAddr') private primaryBorAddr: ElementRef;
  @ViewChild('primaryBorHousingInfo') private primaryBorHousingInfo: ElementRef;
  @ViewChild('primaryBorMailingAddr') private primaryBorMailingAddr: ElementRef;
  @ViewChild('spouseBasicInfo') private spouseBasicInfo: ElementRef;
  @ViewChild('spouseAddress') private spouseAddress: ElementRef;
  @ViewChild('spouseMailingAddress') private spouseMailingAddress: ElementRef;

  constructor(private router: Router,
    platform: Platform,
    private screenInfo: ScreenInfo,
    private borrowerInfo: BorrowerInfoModel


  ) {
    console.log(BorrowerPartitionScreens);
  }

  initializeBorrowerInfo() {
    this.borrowerInfo.BorFirstName = 'Chris';
    this.borrowerInfo.BorLastName = 'Isayan';
    this.borrowerInfo.BorMiddleName = 'K';
    this.borrowerInfo.BorNameSuffix = 'Sr.';
    this.borrowerInfo.BorEmailId = 'ckisayan@yahoo.com';
    this.borrowerInfo.BorPrimaryPhoneNumber = '8182980700';
  }
  ngOnInit() {
    this.initializeBorrowerInfo();
    console.log('borrower info called.');
    // let e = document.getElementById('borsidenav');
    // console.log(e);
    this.openSideNav();
    this.navigateBorSection('default');


  }

  openSideNav() {
    if (window.screen.width > 700) {
      this.borsidenav.open();
    }
  }


  // saveCustomerAddress() {
    // this.primaryCustomerAddressProvidedFlag = true;
  // }
  setAddrRentOwn(rentstatus: string) {

    this.borrowerInfo.BorRentOwn = rentstatus;
    this.primaryCustomerHousingStatus = true;
    if (rentstatus === 'AddrRent') {
      this.primaryCustomerIsRenter = true;
    }
  }
  continueBorhousingStatus() {

  }

  continueWithSpouseInformtion() {
    this.continueWithSpouseSection = true;
    this.coBorSectionEnabledFlag = true;

  }



  navigateBorSection(menuItemSelected) {

    this.setAllMenuItemsUnselected();
    this.hideAllWorkspaces();
    this.setMenuItemsSelected(menuItemSelected);


  }
  hideAllWorkspaces() {
    this.primaryBorMainVisible = false;
    this.primaryBorDetailsVisible = false;
    this.primaryBorAddrVisible = false;
    this.primaryBorHousingInfoVisible = false;
    this.primaryBorMailingAddrVisible = false;
    this.spouseBasicInfoVisible = false;
    this.spouseAddressVisible = false;
    this.spouseMailingAddressVisible = false;
  }

  setWorkspace(menuItemSelected) {

  }
  setAllMenuItemsUnselected() {
    this.primaryBorMain.nativeElement.className = 'side-menu-section-common sectionNotClicked';
    this.primaryBorDetails.nativeElement.className = 'side-menu-section-common sectionNotClicked';
    this.primaryBorAddr.nativeElement.className = 'side-menu-section-common sectionNotClicked';
    this.primaryBorHousingInfo.nativeElement.className = 'side-menu-section-common sectionNotClicked';
    this.primaryBorMailingAddr.nativeElement.className = 'side-menu-section-common sectionNotClicked';
    this.spouseBasicInfo.nativeElement.className = 'side-menu-section-common sectionNotClicked';
    this.spouseAddress.nativeElement.className = 'side-menu-section-common sectionNotClicked';
    this.spouseMailingAddress.nativeElement.className = 'side-menu-section-common sectionNotClicked';
  }

  setMenuItemsSelected(menuItemSelected) {
    switch (menuItemSelected) {
      case 'primaryBorMain': {
        this.primaryBorMain.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.primaryBorMainVisible = true;
        break;
      }

      case 'primaryBorDetails': {
        this.primaryBorDetails.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.primaryBorDetailsVisible = true;
        break;
      }
      case 'primaryBorAddr': {
        this.primaryBorAddr.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.primaryBorAddrVisible = true;
        break;
      }
      case 'primaryBorHousingInfo': {
        this.primaryBorHousingInfo.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.primaryBorHousingInfoVisible = true;
        break;
      }
      case 'primaryBorMailingAddr': {
        this.primaryBorMailingAddr.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.primaryBorMailingAddrVisible = true;
        break;
      }
      case 'spouseBasicInfo': {
        this.spouseBasicInfo.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.spouseBasicInfoVisible = true;
        break;
      }
      case 'spouseAddress': {
        this.spouseAddress.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.spouseAddressVisible = true;
        break;
      }
      case 'spouseMailingAddress': {
        this.spouseMailingAddress.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.spouseMailingAddressVisible = true;
        break;
      }
      default: {
        this.primaryBorMain.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.primaryBorMainVisible = true;
        break;
      }
    }
    console.log(this.primaryBorHousingInfo.nativeElement.className);
  }
  changeMenu(menuItemSelected) {
    //
    this.primaryBorHousingInfo.nativeElement.className = 'side-menu-section-common sectionClicked';
    console.log(this.primaryBorHousingInfo.nativeElement.className);
  }
  navigateNext(menuItem) {
    console.log(menuItem);
    this.navigateBorSection(menuItem);
  }


}



