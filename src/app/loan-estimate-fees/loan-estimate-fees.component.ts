import { Component, OnInit } from '@angular/core';
import { PricingRequestParams, RateSummary, RateSummaryResponse } from "../shared/Entities/pricing.typedef"
import { MatTableDataSource, MatPaginator, MatSort, Sort, MatRadioModule,MatCheckboxModule} from '@angular/material';
import { CashToCloseComponent } from './cash-to-close.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Router } from '@angular/router';
@Component({
  selector: 'loan-estimate-fees',
  templateUrl: './loan-estimate-fees.component.html',
  styleUrls: ['./loan-estimate-fees.component.css']
})
export class LoanEstimateFeesComponent implements OnInit {
  animal: string;
  name: string;
  private panelOpenState: boolean = false;
  private OriginationFeeList:string[];
  constructor(private router: Router, private productSelected:RateSummary,public dialog: MatDialog) {
    console.log("from Fees constractor");

    this.OriginationFeeList=['Admin Fee', 'Discount Points', 'Lender Paid Commission'];
   }

  ngOnInit() {
    
  }
  openCashToClose():void{    
    let dialogRef = this.dialog.open(CashToCloseComponent, {
      width: '550px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog for cash to was closed');
      this.animal = result;
    });
  
}

}
