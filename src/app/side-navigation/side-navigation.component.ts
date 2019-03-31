import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

import {FormControl} from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ChangeDetectorRef} from '@angular/core';

import {MediaMatcher} from '@angular/cdk/layout';
import {MatNavList}from '@angular/material'

@Component({
  selector: 'side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {
  constructor(){
    
  }


  ngOnInit() {
  }
 
}
