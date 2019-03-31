import { Component } from '@angular/core';



@Component({
    selector: 'pricingDetail',
    templateUrl: './pricingDetail.component.html'
})


export class PricingDetailComponent {
    pageName: string;
   
    constructor() {
        this.pageName = 'pricing detail';
        console.log ("called: " + this.pageName);
    }
}
