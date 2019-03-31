import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {PricingDetailComponent} from './pricing/pricingDetail.component';
import {LoginComponent} from './public/login.component';
import {HeaderNavigationComponent} from './shared/header-navigation.component';
import {CommonLib} from './shared/infrastructure/common/CommonLib';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatMenuPanel,
  MatExpansionPanelTitle,
  MatExpansionModule,
  MatGridList,
  MatGridListModule,
  MatTableModule,
  MatRadioModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatChipsModule,
  MatStepperModule,
  MatDrawerContainer,
  MatSidenavContainer,
  MatCardTitle,
  MatDatepicker,
  MatDatepickerModule,

} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardMainComponent } from './home/dashboard-main.component';
import { PricerQuickComponent } from './pricing/pricer-quick.component';
import { FormControl, FormGroupDirective, NgForm, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PricerQuickResults } from './pricing/pricer-quick-results.component';
import { PricingRequestParams, RateSummary, RateSummaryResponse, ProductPricingResponseModel, ProductPricingScenarioRequestModel,
   ProductPricingScenarioResponseModel} from './shared/Entities/pricing.typedef';
import {BorrowerInfoModel, SubjectPropertyModel} from './shared/Entities/loan-app.typedef';

import {ScreenInfo} from './shared/Entities/navigation.typedef';
import { CustomHttpClient} from './shared/infrastructure/http-client.services';
import {  AppSettingsService} from './shared/infrastructure/common/app-settings.services';
import { HttpModule } from '@angular/http';
import { ProductPricingComponent } from './pricing/shared/product-pricing.component';
import { CashToCloseComponent } from './loan-estimate-fees/cash-to-close.component';
import { LoanEstimateFeesComponent } from './loan-estimate-fees/loan-estimate-fees.component';
import { SaveScenarioComponent } from './pricing/shared/save-scenario.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { ScenarioPipelineComponent } from './scenario/scenario-pipeline.component';
import { ScenarioPipelineModel } from './shared/Entities/pricing.typedef';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StreamlineLoanAppComponent } from './streamline-loan-app/streamline-loan-app.component';
import { BorrowerInfoComponent } from './full-loan-app/borrower-info/borrower-info.component';
import { FullLoanAppComponent } from './full-loan-app/full-loan-app.component';
import { BorrowerInfoSlComponent } from './streamline-loan-app/borrower-info-sl/borrower-info-sl.component';
import { BorAddressComponent } from './streamline-loan-app/borrower-info-sl/bor-address/bor-address.component';
import { StreamlineAppModule } from './streamline-loan-app/borrower-info-sl.module';
import { BorBasicInfoComponent } from './streamline-loan-app/borrower-info-sl/bor-basic-info/bor-basic-info.component';
import { BorMailingAddrComponent } from './streamline-loan-app/borrower-info-sl/bor-mailing-addr/bor-mailing-addr.component';
import { BorHousingStatusComponent } from './streamline-loan-app/borrower-info-sl/bor-housing-status/bor-housing-status.component';
import { SpouseBasicInfoComponent } from './streamline-loan-app/borrower-info-sl/spouse-basic-info/spouse-basic-info.component';
import { SpouseAddressComponent } from './streamline-loan-app/borrower-info-sl/spouse-address/spouse-address.component';
import { SpouseMailingAddrComponent } from './streamline-loan-app/borrower-info-sl/spouse-mailing-addr/spouse-mailing-addr.component';
import {GlobalConstants} from './shared/infrastructure/global-constants';
import { BorDetailsComponent } from './streamline-loan-app/borrower-info-sl/bor-details/bor-details.component';
import { LoanTermsComponent } from './full-loan-app/loan-terms/loan-terms.component';
import { SubjPropertyComponent } from './full-loan-app/loan-terms/subj-property/subj-property.component';
import {FullLoanAppModule} from './full-loan-app/full-loan-app.module';
import { BasicLoanInfoComponent } from './full-loan-app/loan-terms/basic-loan-info/basic-loan-info.component';
import { LoanProductPricingComponent } from './full-loan-app/loan-terms/loan-product-pricing/loan-product-pricing.component';
import { LoanSetupComponent } from './full-loan-app/loan-setup/loan-setup.component';
import { LoanAssignmentComponent } from './full-loan-app/loan-setup/loan-assignment/loan-assignment.component';
import { OrderViewCreditComponent } from './full-loan-app/loan-setup/order-view-credit/order-view-credit.component';
import { CreditPublicRecordsComponent } from './full-loan-app/loan-setup/credit-public-records/credit-public-records.component';
import { ApplicationComponent } from './full-loan-app/application/application.component';
import { EmploymentIncomeComponent } from './full-loan-app/application/employment-income/employment-income.component';
import { IncomeOtherComponent } from './full-loan-app/application/income-other/income-other.component';
import { AssetsDetailsComponent } from './full-loan-app/application/assets-details/assets-details.component';
import { LiabilityDetailsComponent } from './full-loan-app/application/liability-details/liability-details.component';
import { ReoDetailsComponent } from './full-loan-app/application/reo-details/reo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingDetailComponent,
    LoginComponent,
    HeaderNavigationComponent,
    DashboardMainComponent,
    PricerQuickComponent,
    PricerQuickResults,
    ProductPricingComponent,
    CashToCloseComponent,
    LoanEstimateFeesComponent,
    SaveScenarioComponent,
    SideNavigationComponent,
    ScenarioPipelineComponent,
    ToolbarComponent,
    StreamlineLoanAppComponent,
    BorrowerInfoComponent,
    FullLoanAppComponent,
    BorrowerInfoSlComponent, BorAddressComponent, BorBasicInfoComponent,
    BorMailingAddrComponent,
    BorHousingStatusComponent,
    SpouseBasicInfoComponent,
    SpouseAddressComponent,
    SpouseMailingAddrComponent,
    BorDetailsComponent,
    LoanTermsComponent,
    SubjPropertyComponent,
    BasicLoanInfoComponent,
    LoanProductPricingComponent, LoanSetupComponent, LoanAssignmentComponent, OrderViewCreditComponent,
    CreditPublicRecordsComponent,
    ApplicationComponent,
    EmploymentIncomeComponent,
    IncomeOtherComponent,
    AssetsDetailsComponent,
    LiabilityDetailsComponent,
    ReoDetailsComponent
  ],
  entryComponents: [CashToCloseComponent, SaveScenarioComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    HttpModule,
    MatGridListModule,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatStepperModule,
    FullLoanAppModule,
    MatDatepickerModule,

    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'pricing', component: PricingDetailComponent },
      { path: 'pricer-quick', component: PricerQuickComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard-main', component: DashboardMainComponent },
      { path: 'pricer-quick-results', component: PricerQuickResults },
      { path: 'loan-estimate-fees', component: LoanEstimateFeesComponent },
      { path: 'app-streamline-loan-app', component: StreamlineLoanAppComponent },
      { path: 'app-full-loan-app', component: FullLoanAppComponent },

      // { path: '**', redirectTo: 'research/side-nav.html' }
    ])
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],

  providers: [ScreenInfo, PricingRequestParams, RateSummary, RateSummaryResponse, CustomHttpClient, ProductPricingResponseModel,
    ProductPricingScenarioRequestModel, ProductPricingScenarioResponseModel, AppSettingsService, CommonLib, ScenarioPipelineModel,
    BorrowerInfoModel

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


