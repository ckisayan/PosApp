import { BorAddressModel, BorrowerInfoModel } from '../shared/Entities/loan-app.typedef';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports:[FormsModule],
    declarations:[],
    providers:[],
    entryComponents: [BorAddressModel, BorrowerInfoModel],

})
export class StreamlineAppModule{

}