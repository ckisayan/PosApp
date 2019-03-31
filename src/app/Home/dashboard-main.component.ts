import { Component, OnInit } from '@angular/core';
import {ScenarioPipelineComponent} from '../scenario/scenario-pipeline.component'

@Component({
  selector: 'dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {

  constructor() {    
   }
  public componentData=null;
  ngOnInit() {
    
  }
  //sharedHeader: Array<ShareD
  test(){
    alert(1);
  }
}
