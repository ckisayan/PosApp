import { Component, OnInit } from '@angular/core';
import {CustomHttpClient} from "../shared/infrastructure/http-client.services";
import { PricingRequestParams, GetScenarioPipelineRequest, ScenarioPipelineModel } from '../shared/Entities/pricing.typedef';
import { Router } from '@angular/router';
import { ScreenInfo } from '../shared/Entities/navigation.typedef';

@Component({
  selector: 'scenario-pipeline',
  templateUrl: './scenario-pipeline.component.html',
  styleUrls: ['./scenario-pipeline.component.css']
})
export class ScenarioPipelineComponent implements OnInit {
  private priceQuoteList:any;
  private pipelineScenarioList: ScenarioPipelineModel[]=[];
  private filtersLoaded: Promise<boolean>;
  constructor(private router: Router,private customHttpClient: CustomHttpClient, private oneScenario: ScenarioPipelineModel,
    private screenInfo: ScreenInfo) { }
  
  ngOnInit() {    
    this.getscenariopipeline();
    
  }
  SortScenarioTable(columnName: string){
    alert(columnName);
  }
  openPricerQuickResults(scenario:ScenarioPipelineModel){
   Object.assign(this.oneScenario,scenario);
    //this.router.navigate(['pricer-quick', {scenarioIdentifier: this.oneScenario.ScenarioIdentifier} ]);
    this.screenInfo.NextActionRequest="load-prices-from-db";
    this.screenInfo.NavigatingFromScreen="scenario-pipeline";
    
    this.router.navigate(['pricer-quick-results']);


  }
  getScenarioOwnerUserId():string{
    // it should return user id who originally created this scenario
    //if it is the first time, then it is user who is logged in
    //if it is branch manager opening one of MLO's scenario, either we don't let save or save under original MLO Id -- not allowing to save is the right thing to do
    return 'cisayan';
  }
  getscenariopipeline(){  
    
    
    let scenPipe: GetScenarioPipelineRequest=new GetScenarioPipelineRequest();
    scenPipe.UserId = this.getScenarioOwnerUserId();

    let pricingResults=this.customHttpClient.GetScenarioPipelineAsync(scenPipe).subscribe(
        items =>
      { 
        this.pipelineScenarioList =<ScenarioPipelineModel[]> items.ScenarioPipelineList;
        this.filtersLoaded = Promise.resolve(true);   
    
      }
    );
  }
}
