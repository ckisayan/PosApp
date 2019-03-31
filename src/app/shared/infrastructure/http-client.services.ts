import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, Headers, Response, ResponseContentType, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PricingRequestParams, RateSummary, RateSummaryResponse,ProductPricingScenarioRequestModel,GetScenarioPipelineRequest, GetScenarioModel} from "../Entities/pricing.typedef";

enum Scope {
    local,
    session
}
@Injectable()
export class CustomHttpClient {
    private httpStatus: any;
    constructor(private http: Http, private router: Router) {

    }

    private configureHeaders(headers: Headers) {
        headers.append('X-user_name', 'chris');
        headers.append('X-env_code', 'dev');
        headers.append('auth', 'accessToken');
        headers.append('Content-Type', 'application/json');
    }
    getPrice(pricingParams: PricingRequestParams)
    {
        console.log("pricing params were called.");
    }

    PutRateQuoteAsync(rateInput: ProductPricingScenarioRequestModel): Observable<any>{
        
        let body = JSON.stringify(rateInput);
        let headers = new Headers();
        this.configureHeaders(headers);
        
        //let serviceUrl = "http://localhost/webapi/api/rate/getsampleraterequest";
        let serviceUrl = "http://localhost/WebApi/api/rate/savepricequote";
        
        console.log("async PutRateQuote was called.");
        
        return this.http.post(serviceUrl, body, {headers: headers} ).map((response: Response)=>{ 
            let data = response.json();
            return data;
        });                  
    
    }
    
    GetScenarioPipelineAsync(pipeRequest : GetScenarioPipelineRequest): Observable<any>{
        
        let body = JSON.stringify(pipeRequest);
        let headers = new Headers();
        this.configureHeaders(headers);
        
        //let serviceUrl = "http://localhost/webapi/api/rate/getsampleraterequest";
        let serviceUrl = "http://localhost/WebApi/api/rate/getscenariopipeline";
        
        console.log("async getscenariopipeline was called.");
        
        return this.http.post(serviceUrl, body, {headers: headers} ).map((response: Response)=>{ 
            let data = response.json();
            return data;
        });                  
    
    }

    GetPreviouslySavedRateQuoteAsync(getScenario : GetScenarioModel): Observable<any>{
        
        let body = JSON.stringify(getScenario);
        let headers = new Headers();
        this.configureHeaders(headers);
     
        let serviceUrl = "http://localhost/WebApi/api/rate/getpreviouslysavedratequote";
        
        console.log("async getpreviouslysavedratequote was called.");
        
        return this.http.post(serviceUrl, body, {headers: headers} ).map((response: Response)=>{ 
            let data = response.json();
            return data;
        });                  
    
    }
    
    getPriceAsync(pricingParams: PricingRequestParams): Observable<any>
    {
        let body = JSON.stringify(pricingParams);
        console.log(body);
        let headers = new Headers();
        this.configureHeaders(headers);
        
        //let serviceUrl = "http://localhost/webapi/api/rate/getsampleraterequest";
        //let serviceUrl = "http://localhost/WebApi/api/rate/getrate";
        let serviceUrl = "http://localhost/WebApi/api/rate/quoteprice";
        
        
        console.log("async pricing was called.");
        
        return this.http.post(serviceUrl, body, {headers: headers} ).map((response: Response)=>{ 
            let data = response.json();
            return data;
        });          
        
    }

}