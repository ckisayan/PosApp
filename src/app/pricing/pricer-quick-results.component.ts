import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PricingRequestParams, RateSummary,RateSummaryResponse, ScenarioPipelineModel, GetScenarioModel } from "../shared/Entities/pricing.typedef";
import {CustomHttpClient} from "../shared/infrastructure/http-client.services";
import { isNullOrUndefined } from 'util';
import { CommonLib } from '../shared/infrastructure/common/CommonLib';
import { ScreenInfo } from '../shared/Entities/navigation.typedef';
//import {ProductPricingComponent} from './shared/product-pricing.component';
/*
import { Observable } from 'rxjs/Observable';
import {plainToClass} from "class-transformer";
import {classToPlain} from "class-transformer";
import {classToClass} from "class-transformer";
import {serialize} from "class-transformer";
import {deserialize} from "class-transformer";
*/
//import { Http, Headers, Response, ResponseContentType, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';


@Component({
  selector: 'pricer-quick-results',
  templateUrl: './pricer-quick-results.component.html',
  styleUrls: ['./pricer-quick-results.component.css']
})
export class PricerQuickResults implements OnInit {
  //private rateSummaryReseponse:PricingResultsParams[]=[];
  //private rateSummary:PricingResultsParams;
  filtersLoaded: Promise<boolean>;
  //rateSummaryResponse1:RateSummaryResponse;
  private eligibleProductList: RateSummary[]= [];
  private inEligibleProductList: RateSummary[]= [];
  
  constructor(private router: Router, public pricingParams: PricingRequestParams, 
    private customHttpClient: CustomHttpClient, 
    private rateSummaryResponse: RateSummaryResponse,
    private oneScenario: ScenarioPipelineModel,
    private screenInfo: ScreenInfo
   ) {
    
    console.log("in pricing results, fico is: " +this.pricingParams.FicoScore)
    
   }

  ngOnInit() {
    
    if(!this.pricingParams.FicoScore){
      this.router.navigate(['pricer-quick']);   
    }
    if (!isNullOrUndefined(this.oneScenario.ScenarioIdentifier) && this.oneScenario.ScenarioIdentifier.length>0 && this.screenInfo.NextActionRequest!='price'){
      console.log("scen id is :"+this.oneScenario.ScenarioIdentifier);
      console.log(this.oneScenario);
      this.getPreviouslySavedRateQuote();
    }else{
      console.log(this.oneScenario);
      this.getFreshPrice();
    }
  }

  
  getFreshPrice(){  
    console.log ("refreshing price on quick pricer results screen.");
    //let pricingParamsForService=this.normalizeInput();
    let pricingParamsForService=CommonLib.normalizePriceQuoteRequest(this.pricingParams);
  
    let pricingResults=this.customHttpClient.getPriceAsync(pricingParamsForService).subscribe(
        items =>
      {
        this.rateSummaryResponse = <RateSummaryResponse> items;       
        this.setProductsFiltered(items.RateSummaryList,'Eligible');
        this.setProductsFiltered(items.RateSummaryList,'In-Eligible');
        this.filtersLoaded = Promise.resolve(true);       
      }
    );

  }
  getPreviouslySavedRateQuote(){
    let getScenario: GetScenarioModel = new GetScenarioModel();
    getScenario.ScenarioIdentifier = this.oneScenario.ScenarioIdentifier;
    
    let pricingResults=this.customHttpClient.GetPreviouslySavedRateQuoteAsync(getScenario).subscribe(
      items =>
    {
     
      this.rateSummaryResponse = <RateSummaryResponse> items.ProductPricingScneario;      
      this.setProductsFiltered(items.ProductPricingScneario.RateSummaryList,'Eligible');
      this.setProductsFiltered(items.ProductPricingScneario.RateSummaryList,'In-Eligible');
      Object.assign(this.pricingParams, items.ProductPricingScneario.QuoteRequestParams);
      console.log(this.pricingParams)
      this.filtersLoaded = Promise.resolve(true);
     
    }
  );
  }
  setProductsFiltered(productList, recommendationType ){
    let products: RateSummary[]= [];
    productList.forEach(function(product){

      if (product.RecommendationType ===recommendationType){
        products.push(product)
      }
        
    });
    if (recommendationType ==='Eligible')
      this.eligibleProductList = products;
    else
      this.inEligibleProductList = products;   
  }
  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

}
