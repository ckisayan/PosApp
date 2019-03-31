import { Component, OnInit, Inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {CustomHttpClient} from '../../shared/infrastructure/http-client.services';

import { PricingRequestParams, RateSummary, RateSummaryResponse, ProductPricingResponseModel, ProductPricingScenarioRequestModel,
  ScenarioPipelineModel} from '../../shared/Entities/pricing.typedef';
// import {} from './';
import { CommonLib } from '../../shared/infrastructure/common/CommonLib';
import { isNullOrUndefined } from 'util';
import { SessionInfoModel } from '../../shared/Entities/navigation.typedef';

@Component({
  selector: 'app-save-scenario',
  templateUrl: './save-scenario.component.html',
  styleUrls: ['./save-scenario.component.css']
})
export class SaveScenarioComponent implements OnInit {
  // @Input('productListFiltered') productListFiltered: RateSummary;
  // @Input('pricingParams') pricingParams: PricingRequestParams;
  private borFirstName: string;
  private borLastName: string;
  private rateShortDesc: string;
  private rateLongDesc: string;
  private productPricingIdentifier: string;
  constructor(public dialogRef: MatDialogRef<SaveScenarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private customHttpClient: CustomHttpClient, private oneScenario: ScenarioPipelineModel, ) {
 // ,@Inject(MAT_DIALOG_DATA) public dialogResponse: any
    }

  ngOnInit() {
    console.log(this.data);
    this.borFirstName = this.data.productPricingInput.BorFirstName ;
    this.borLastName = this.data.productPricingInput.BorLastName ;
    this.rateShortDesc = this.data.productPricingInput.RateShortDesc ;
    this.rateLongDesc = this.data.productPricingInput.RateLongDesc ;
    this.productPricingIdentifier = this.data.productPricingInput.ScenarioIdentifier;
  }
  getScenarioOwnerUserId(): string {
    // it should return user id who originally created this scenario
    // if it is the first time, then it is user who is logged in
    // if it is branch manager opening one of MLO's scenario, either we don't let save or save under original MLO Id
    // -- not allowing to save is the right thing to do
    return 'cisayan';
  }
  cancelScenarioDialog() {
    this.dialogRef.close(this.data);
  }
  saveScenarioDialog() {
    let screenHasIssues = false;
    if ((isNullOrUndefined(this.borFirstName) || this.borFirstName.length <= 0) ||
        (isNullOrUndefined(this.borLastName) || this.borLastName.length <= 0) ||
        (isNullOrUndefined(this.rateShortDesc) || this.rateShortDesc.length <= 0)
        ) {
      screenHasIssues = true;
    }
    if (screenHasIssues) {
      alert('Data is not saved.  Borrower first/last name and short discription is required.');
      return false;
    }
    let response: ProductPricingResponseModel;
    const productPricing = new ProductPricingScenarioRequestModel();
    productPricing.QuoteRequestParams = CommonLib.normalizePriceQuoteRequest(this.data.productPricingInput.QuoteRequestParams);
    productPricing.RateSummaryList = this.data.productPricingInput.RateSummaryList;
    // console.log(this.data.productPricingInput.RateSummaryList);
    productPricing.ExecutionParams.ActionToPerform = 'Save';
    productPricing.BorFirstName = this.borFirstName;
    productPricing.BorLastName = this.borLastName;
    productPricing.RateShortDesc = this.rateShortDesc;
    productPricing.RateLongDesc = this.rateLongDesc;

    if (!isNullOrUndefined(this.productPricingIdentifier) && this.productPricingIdentifier.length >= 0) {
      productPricing.ScenarioIdentifier = this.productPricingIdentifier;
    }
    productPricing.UserId = this.getScenarioOwnerUserId();
    const pricingResults = this.customHttpClient.PutRateQuoteAsync(productPricing).subscribe(
        result => {
        console.log ('saveScenarioDialog pushed');
        response = result;
        this.productPricingIdentifier = response.ProductPricingIdentifier;
        this.data.ScenarioIdentifier = response.ProductPricingIdentifier;
        this.data.BorFirstName = this.borFirstName;
        this.data.BorLastName = this.borLastName;
        this.data.RateShortDesc = this.rateShortDesc;
        this.data.RateLongDesc = this.rateLongDesc;

        console.log (response);
        SessionInfoModel.SetSessionContextToLead( response.ProductPricingIdentifier);
      }
    );
    this.dialogRef.close(this.data);
  }
  onNoClick(): void {
    console.log ('onNoClick');
    this.dialogRef.close(this.data);
  }
}
