import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PricingRequestParams, RateSummaryResponse, ScenarioPipelineModel, RateSummary } from '../../../shared/Entities/pricing.typedef';
import { CustomHttpClient } from '../../../shared/infrastructure/http-client.services';
import { ScreenInfo } from '../../../shared/Entities/navigation.typedef';
import { CommonLib } from '../../../shared/infrastructure/common/CommonLib';

@Component(
  {
  selector: 'app-loan-product-pricing',
  templateUrl: './loan-product-pricing.component.html',
  styleUrls: ['./loan-product-pricing.component.css']
})
export class LoanProductPricingComponent implements OnInit {
  private productList: RateSummary[] = [];
  private apiLoaded: Promise<boolean>;
  constructor(private router: Router, private pricingParams: PricingRequestParams ,
    private customHttpClient: CustomHttpClient ,
    private rateSummaryResponse: RateSummaryResponse,
    private oneScenario: ScenarioPipelineModel,
    private screenInfo: ScreenInfo) { }

  ngOnInit() {
    this.pricingParams.AmortTermMonths = 360;
    this.getFreshPrice();
  }
  getFreshPrice() {
    console.log ('refreshing price on quick pricer results screen.');
    // let pricingParamsForService=this.normalizeInput();
    const pricingParamsForService = CommonLib.normalizePriceQuoteRequest(this.pricingParams);

    const pricingResults = this.customHttpClient.getPriceAsync(pricingParamsForService).subscribe(
        items => {
        this.rateSummaryResponse = <RateSummaryResponse> items;
        // this.setProductsFiltered(items.RateSummaryList,'Eligible');
        // this.setProductsFiltered(items.RateSummaryList,'In-Eligible');

        this.apiLoaded = Promise.resolve(true);
        this.productList = items.RateSummaryList;
      }
    );

  }
}
