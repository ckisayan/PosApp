import { Injectable } from '@angular/core';
import { PricingRequestParams, RateSummary, RateSummaryResponse, ProductPricingResponseModel,
    ProductPricingScenarioRequestModel} from '../../Entities/pricing.typedef';

export class CommonLib {
    static normalizePriceQuoteRequest(pricingParams: PricingRequestParams): PricingRequestParams {

        const pricingParamsForService = Object.assign({}, pricingParams);
        if (Array.isArray(pricingParams.AmortTermMonths)) {
          pricingParamsForService.AmortTermMonthsList = '';
          pricingParams.AmortTermMonths.forEach(element => {
            pricingParamsForService.AmortTermMonthsList += element + ',';
          });
          pricingParamsForService.AmortTermMonths = null;
        }
        if (Array.isArray(pricingParams.AmortType)) {
          pricingParamsForService.AmortTypeList = '';
          pricingParams.AmortType.forEach(element => {
            pricingParamsForService.AmortTypeList += element + ',';
          });
          pricingParamsForService.AmortType = null;
        }
        if (Array.isArray(pricingParams.LockTermDays)) {
          pricingParamsForService.LockTermDaysList = '';
          pricingParams.LockTermDays.forEach(element => {
            pricingParamsForService.LockTermDaysList += element + ',';
          });
          pricingParamsForService.LockTermDays = null;
        }
        if (Array.isArray(pricingParams.LoanType)) {
          pricingParamsForService.LoanTypeList = '';
          pricingParams.LoanType.forEach(element => {
            pricingParamsForService.LoanTypeList += element + ',';
          });
          pricingParamsForService.LoanType = null;
        }
        if (Array.isArray(pricingParams.DocType)) {
          pricingParamsForService.DocTypeList = '';
          pricingParams.DocType.forEach(element => {
            pricingParamsForService.DocTypeList += element + ',';
          });
          pricingParamsForService.DocType  = null;
        }
        return pricingParamsForService;
    }
}
