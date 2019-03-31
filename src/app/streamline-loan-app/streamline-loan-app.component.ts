import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { PricingRequestParams, RateSummary, RateSummaryResponse, ScenarioPipelineModel, GetScenarioModel }
  // from "../shared/Entities/pricing.typedef";
// import { CustomHttpClient } from "../shared/infrastructure/http-client.services";
import { isNullOrUndefined } from 'util';
import { CommonLib } from '../shared/infrastructure/common/CommonLib';
import { ScreenInfo } from '../shared/Entities/navigation.typedef';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BorrowerInfoComponent } from '../full-loan-app/borrower-info/borrower-info.component';
import { MatStepper, MatIcon } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-streamline-loan-app',
  templateUrl: './streamline-loan-app.component.html',
  styleUrls: ['./streamline-loan-app.component.css']
})
export class StreamlineLoanAppComponent implements OnInit {

  isLinear = false;
  borrowerInfoFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  // https://material.io/guidelines/components/steppers.html#steppers-types-of-steppers
  constructor(private router: Router,
    private screenInfo: ScreenInfo,

  ) { }

  ngOnInit() {
    /*
    this.borrowerInfoFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    */
  }
  SaveStreamlineAppData(stepName: string) {
    alert(stepName);
  }
  completeItem() {
    // this.stepper.selected.completed = true;
    // this.stepper.next();
  }
  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }
  ActivateBorrwerInfoTab() {

  }
}

