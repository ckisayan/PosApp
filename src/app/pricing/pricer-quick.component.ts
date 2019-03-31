import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { PricingRequestParams, ScenarioPipelineModel } from "../shared/Entities/pricing.typedef";
import { ScreenInfo, SessionInfoModel } from '../shared/Entities/navigation.typedef';


@Component({
  selector: 'pricer-quick',
  templateUrl: './pricer-quick.component.html',
  styleUrls: ['./pricer-quick.component.css']
})
export class PricerQuickComponent implements OnInit {
  //public name: string;
  public propertyMarketValueControl: FormControl;
  //public matcher: any;
  public requiredDataPanelOpenState: boolean = true;
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private screenInfo: ScreenInfo, 
    private pricingParams: PricingRequestParams,
    private oneScenario: ScenarioPipelineModel) {

    if (!this.pricingParams) {
      this.resetQuickPricerFields();
      screenInfo.ScreenName="Quick Pricer";       
    }
    else {
      console.log("pricingParms is already set in quick pricer");
    }
  }

  ngOnInit() {
    console.log("fico score is: " + this.pricingParams.FicoScore);
    this.runDefaults();
    SessionInfoModel.SanitizeSession();

  }
  onBlurFicoScore() {
    console.log("fico score is: " + this.pricingParams.FicoScore);
  }
  onBlurOccupancyType() {
    console.log("occ type is: " + this.pricingParams.OccType);
  }

  runQuickPrice() {
    console.log("navigating to pricer quick results.");
    if (this.screenInfo.NavigatingFromScreen =="menu") this.oneScenario = null;
    this.screenInfo.NavigatingFromScreen="pricer-quick";
    this.screenInfo.NextActionRequest="price";
    this.router.navigate(['pricer-quick-results']);
  }
  runDefaults(){
    
    this.pricingParams.FicoScore = 745;
    this.pricingParams.AmortType = ["Fixed"];
    this.pricingParams.AmortTermMonths =  ["360"];
    this.pricingParams.LoanType = ["Conv"];
    this.pricingParams.LockTermDays=["30"];
    this.pricingParams.DocType =["Full"];
    this.pricingParams.PropertyType ="SFR";
    this.pricingParams.LtvPct = 80;
    this.pricingParams.Requestingloanamt = 400000;
    this.pricingParams.OccType = "OwnerOccupied";
    this.pricingParams.ResidencyStatusType = "UsCitizen";
    this.pricingParams.ImpountEscrowFlag = "Yes";
    this.pricingParams.RequestingRatePct = 4.25;

  }
  CalculateQuickPriceFields(){

    //calcLV

  }
  resetQuickPricerFields() {
    console.log("Reset pricing input fields.");
    this.pricingParams = {
      FicoScore: null,
      OccType: null,
      FinType: null,
      LockTermDays: null,
      LockTermDaysList: null,
      Requestingloanamt: null,
      AmortType:null,
      AmortTypeList:null,
      LoanType:null,
      LoanTypeList:null,
      AmortTermMonths:null,
      AmortTermMonthsList:null,
      SubjectPropertyAddress:null,
      ExistingSecondLienAmt:null,
      SubjectPropertyZipCode:null,
      SubjectPropertyCounty:null,
      SubjectPropertyCity:null,
      SubjectPropertyState:null,
      DownPaymentPct:null,
      RequestingRatePct:null,
      PointsPct:null,
      PropertyType:null,
      LtvPct:null,
      CltvPct:null,
      DocType:null,
      DocTypeList:null,
      ResidencyStatusType:null,
      AusRecommendation:null,
      FirstTimeHomeBuyerFlag:null,
      MortgageInsuranceType:null,
      MaturityTermMonths:null,
      DtiPct:null,
      PropertyValueAmt:null,
      ImpountEscrowFlag:null

    }
  }
}
