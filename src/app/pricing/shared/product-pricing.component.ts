import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';

import { PricingRequestParams, RateSummary, RateSummaryResponse, ProductPricingResponseModel,
  ProductPricingScenarioResponseModel, ProductPricingScenarioRequestModel,
  ScenarioPipelineModel} from '../../shared/Entities/pricing.typedef';
import { MatTableDataSource, MatPaginator, MatSort, Sort, MatRadioModule, MatCheckboxModule} from '@angular/material';

import {SaveScenarioComponent} from './save-scenario.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { SessionInfoModel } from '../../shared/Entities/navigation.typedef';

@Component({
  selector: 'app-product-pricing',
  templateUrl: './product-pricing.component.html',
  styleUrls: ['./product-pricing.component.css'],
  providers: []
})

export class ProductPricingComponent implements OnInit {

  private productPricingInput = new ProductPricingScenarioRequestModel();
  private showCreateLoan = false;

  @Input('productListFiltered') productListFiltered: RateSummary[];

  constructor(private router: Router, private pricingParams: PricingRequestParams,
    private productSelected: RateSummary, public dialog: MatDialog,
    private oneScenario: ScenarioPipelineModel) {
    console.log('ProductPricingComponent constructor was called.');
  }


  ngOnInit() {
    console.log(this.pricingParams);
    if (isNullOrUndefined(this.productPricingInput.BorFirstName) ||
            this.productPricingInput.BorFirstName.length <= 0) {
      this.productPricingInput.BorFirstName = this.oneScenario.BorFirstName;
      this.productPricingInput.BorLastName = this.oneScenario.BorLastName;
      this.productPricingInput.ScenarioIdentifier = this.oneScenario.ScenarioIdentifier;
      this.productPricingInput.RateShortDesc = this.oneScenario.ScenarioShortDesc;
      this.productPricingInput.RateLongDesc = this.oneScenario.ScenarioLongDesc;
    }
    if (!SessionInfoModel.IsLoanContext()) {  // for readabilty this should be if lead in context
      this.showCreateLoan = true;
    }

  }

  onClickOfProductChkBox(chkBoxCtrl) {
  }

  showDefaultFees() {
    this.productSelected.ProductName = '30 yr fix.';
    this.router.navigate(['/loan-estimate-fees']);
  }

  EditScenario() {
    this.router.navigate(['/pricer-quick']);
  }
  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  getQuotesToBeSaved(): RateSummary[] {
    const rateSummaryList: RateSummary[] = [];

    // tslint:disable-next-line:no-shadowed-variable
    this.productListFiltered.forEach( rateSummary => {
      if (rateSummary.ProductSelected === true) {
        rateSummaryList.push(rateSummary);
      }
    });
    const rateSummary = new RateSummary();

    return rateSummaryList;
  }
  saveScenario(): boolean {
    console.log('filtered List');
    console.log(this.productListFiltered);
    if (typeof this.productListFiltered === 'undefined' || this.productListFiltered === null || this.productListFiltered.length <= 0) {
      alert ('No Product to Save');
      return false;
    }
    this.productPricingInput.QuoteRequestParams = this.pricingParams;
    this.productPricingInput.RateSummaryList = this.getQuotesToBeSaved();
    console.log(this.productPricingInput.RateSummaryList);
    if (this.productPricingInput.RateSummaryList == null || this.productPricingInput.RateSummaryList.length <= 0) {
      alert('No Product selected.');
      return false;
    }
    const dialogRef = this.dialog.open(SaveScenarioComponent, {
      width: '550px',
      data: { productPricingInput: this.productPricingInput }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('the save for scenario was closed:'+result);

      this.productPricingInput.BorFirstName = result.BorFirstName;
      this.productPricingInput.BorLastName = result.BorLastName;
      this.productPricingInput.ScenarioIdentifier = result.ScenarioIdentifier;
      this.productPricingInput.RateShortDesc = result.RateShortDesc;
      this.productPricingInput.RateLongDesc = result.RateLongDesc;

    });
    return true;
  }

}
