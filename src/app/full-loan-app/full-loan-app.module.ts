import { SubjectPropertyModel, LoanDetailModel, LoanAssignmentModel, OrderViewCreditModel,
    CreditReportDataModel, } from '../shared/Entities/loan-app.typedef';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ScreenInfo } from '../shared/Entities/navigation.typedef';

@NgModule({
    imports: [FormsModule],
    declarations: [],
    providers: [ScreenInfo, SubjectPropertyModel, LoanDetailModel, LoanAssignmentModel, OrderViewCreditModel, CreditReportDataModel],
    entryComponents: [],


})
export class FullLoanAppModule {

}
