import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { ScreenInfo } from '../../shared/Entities/navigation.typedef';
import { BorrowerInfoModel } from '../../shared/Entities/loan-app.typedef';


import { FormControl } from '@angular/forms';
import { BidiModule } from '@angular/cdk/bidi';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  private employmentIncomeVisible = false;
  private incomeOtherVisible = false;
  private assetsDetailsVisible = false;
  private reoDetailsVisible = false;
  private liabilityDetailsVisible = false;


  @ViewChild('loanSetupSideNav') private loanSetupSideNav: MatSidenav;
  @ViewChild('employmentIncome') private employmentIncome: ElementRef;
  @ViewChild('incomeOther') private incomeOther: ElementRef;
  @ViewChild('assetsDetails') private assetsDetails: ElementRef;
  @ViewChild('liabilityDetails') private liabilityDetails: ElementRef;
  @ViewChild('reoDetails') private reoDetails: ElementRef;

  constructor(private router: Router,
    platform: Platform,
    private screenInfo: ScreenInfo) { }

  ngOnInit() {
  this.navigateToSection('reoDetails');
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
    this.employmentIncomeVisible = false;
    this.incomeOtherVisible = false;
    this.assetsDetailsVisible = false;
    this.reoDetailsVisible = false;
    this.liabilityDetailsVisible = false;

  }
  setAllMenuItemsUnselected() {
    this.employmentIncome.nativeElement.className = 'side-menu-section-common sectionNotClicked';
    this.incomeOther.nativeElement.className = 'side-menu-section-common sectionNotClicked';
    this.assetsDetails.nativeElement.className = 'side-menu-section-common sectionNotClicked';
    this.liabilityDetails.nativeElement.className = 'side-menu-section-common sectionNotClicked';
    this.reoDetails.nativeElement.className = 'side-menu-section-common sectionNotClicked';

  }
  setMenuItemsSelected(menuItemSelected) {
    switch (menuItemSelected) {
      case 'employmentIncome': {
        this.employmentIncome.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.employmentIncomeVisible = true;
        break;
      }
      case 'incomeOther': {
        this.incomeOther.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.incomeOtherVisible = true;
        break;
      }
      case 'assetsDetails': {
        this.assetsDetails.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.assetsDetailsVisible = true;
        break;
      }
      case 'reoDetails': {
        this.reoDetails.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.reoDetailsVisible = true;
        break;
      }
      case 'liabilityDetails': {
        this.liabilityDetails.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.liabilityDetailsVisible = true;
        break;
      }
      default: {
        this.employmentIncome.nativeElement.className = 'side-menu-section-common sectionClicked';
        this.employmentIncomeVisible = true;
        break;
      }
    }
  }
  navigateNext(menuItem) {
    console.log(menuItem);
    this.navigateToSection(menuItem);
  }
}
