
export class PricingRequestParams {
    FicoScore: number;
    OccType: string;
    FinType:string;
    LockTermDays:any;
    LockTermDaysList:string;
    AmortType:any;
    AmortTypeList:string;
    LoanType: any;
    LoanTypeList: string;
    AmortTermMonths:any;
    AmortTermMonthsList:string;
    Requestingloanamt:number;  
    SubjectPropertyAddress:string;
    ExistingSecondLienAmt:number;
    SubjectPropertyZipCode:string;
    SubjectPropertyCounty:string;
    SubjectPropertyCity:string;
    SubjectPropertyState:string;
    DownPaymentPct:number;
    RequestingRatePct:number;
    PointsPct:number;
    PropertyType:string;
    LtvPct:number;
    CltvPct:number;
    DocType:any;
    DocTypeList:string;
    ResidencyStatusType:string;
    AusRecommendation :string;
    FirstTimeHomeBuyerFlag:string;
    MortgageInsuranceType:string;
    MaturityTermMonths:number;
    DtiPct:string;   
    PropertyValueAmt:number;
    ImpountEscrowFlag:string;
  
}
export class ExecutionParamsModel{
    public  ActionToPerform:string;
}


export class RateSummary {
   RateIdentifier: string;
   PointsPct: number;
   ProductName: string;
   AmortType:string;
   AmortTerm:string;
   PricelockDays: number;
   RatePct: number;
   AprPct:number;
   FeesAmt:number;
   OriginationpointPct:number;
   DiscountspointsPct:number;
   EstimatedMoPayment: number;
   RatesheetDateTime:string;
   RecommendationType:string;
   ReasonDesc:string;
   ProductSelected: boolean=false;   
}
export class RateSummaryResponse{
    public RateSummaryList: RateSummary[]=[];

}
export class ResponseBase{
    public ResponseCode: ResponseCode; 
    public ErrorDesc:string;
}

export enum ResponseCode
{
    SUCCESS = 0,
    FAILURE = 1
}

export class ProductPricingScenarioRequestModel{
    public QuoteRequestParams = new PricingRequestParams();    
    public RateSummaryList: RateSummary[]=[];
    public ExecutionParams = new ExecutionParamsModel();
    public ScenarioIdentifier: string;
    public BorFirstName: string;
    public BorLastName: string;
    public RateShortDesc: string;
    public RateLongDesc: string;
    public UserId: string;
    public AnyMessage: string;

}

export class ProductPricingScenarioResponseModel{
    ResponseCode: string;

}

export class ProductPricingResponseModel extends ResponseBase{
    public ProductPricingIdentifier:string;
}

export class ScenarioPipelineModel {    
    public BorrowerName:string;
    public ScenarioShortDesc:string;
    public LoanAmt :number;
    public LtvPct:number;
    public ScenarioLastUpdatedDate:string;
    public ScenarioIdentifier: string
    public UserId:string;
    public ScenarioLongDesc:string;
    public BorFirstName:string;
    public BorLastName:string;
}

export class GetScenarioPipelineResponse extends ResponseBase
{
    public ScenarioPipelineList: ScenarioPipelineModel[]=[];    
}
export class GetScenarioPipelineRequest{
    public BorName:string;
    public UserId:string;
    public ScenarioIdentifier:string;    
}

export class GetScenarioModel
{
    public ScenarioIdentifier:string;
    

}