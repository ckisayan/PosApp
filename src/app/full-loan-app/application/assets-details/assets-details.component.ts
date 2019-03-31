import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoanAssignmentModel } from '../../../shared/Entities/loan-app.typedef';
import { Router } from '@angular/router';
import { ScreenInfo } from '../../../shared/Entities/navigation.typedef';

@Component({
  selector: 'app-assets-details',
  templateUrl: './assets-details.component.html',
  styleUrls: ['./assets-details.component.css']
})
export class AssetsDetailsComponent implements OnInit {
  private dispAddAssetIcons = false;
  private showAddEditLiabilities = false;
  @Output() childMenuEvent = new EventEmitter();
  private addOtherIncome = false;
  constructor(private router: Router,
    private screenInfo: ScreenInfo
    ) { }

  ngOnInit() {
  }
  AddAnotherAcccountClicked() {
    this.dispAddAssetIcons = true;
    this.showAddEditLiabilities = false;
  }
  SaveCancelAssets(action: string) {
    this.dispAddAssetIcons = true;
    this.showAddEditLiabilities = false;
  }
  saveAssetsDetails(navigateTo: string) {
    if (navigateTo === 'OrderVOA') {
      return;
    }
    if (navigateTo === 'next') {
      this.navigateNext();
    } else {
      this.navigatePrevious();
    }
  }
  navigateNext() {
    this.childMenuEvent.emit('borBasicInfo');
  }
  navigatePrevious() {
    this.childMenuEvent.emit('spouseMailingAddress');
  }

  createAssetNew(id: number, assetType: string) {
    this.dispAddAssetIcons = false;
    this.showAddEditLiabilities = true;
    switch (assetType) {
      case 'life_insurance':
      {
        break;
      }
      case 'cs_accounts':
      {
        break;
      }
    }
  }
}


