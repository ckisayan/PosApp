import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoanAssignmentModel } from '../../../shared/Entities/loan-app.typedef';
import { Router } from '@angular/router';
import { ScreenInfo } from '../../../shared/Entities/navigation.typedef';

@Component({
  selector: 'app-liability-details',
  templateUrl: './liability-details.component.html',
  styleUrls: ['./liability-details.component.css']
})
export class LiabilityDetailsComponent implements OnInit {

  private placeHolderAmt: number;
  private addEditLability = true;
  private addLiabilityIcons = true;
  @Output() childMenuEvent = new EventEmitter();
  constructor(private router: Router,
    private screenInfo: ScreenInfo
    ) { }

  ngOnInit() {
  }
  saveReoLiabilityDetails(navigateTo: string) {
    if (navigateTo === 'next') {
      this.navigateNext();
    } else {
      this.navigatePrevious();
    }
  }
  navigateNext() {
    this.childMenuEvent.emit('borBasicInfo');
  }
  navigatePrevious() {
    this.childMenuEvent.emit('spouseMailingAddress');
  }
  createLiabilityNew(borrowerId: string, liabilityType: string) {
    this.addEditLability = true;
  }
  SaveCancelLiability(action: string) {
    alert(action);
  }
}
