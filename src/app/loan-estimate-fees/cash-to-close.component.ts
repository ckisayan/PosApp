import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'cash-to-close',
  templateUrl: './cash-to-close.component.html',
  styleUrls: ['./cash-to-close.component.css']
})
export class CashToCloseComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CashToCloseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  closeCashToCloseDialiog(){
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
