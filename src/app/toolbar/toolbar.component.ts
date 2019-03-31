import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ScreenInfo } from '../shared/Entities/navigation.typedef';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router,
    private screenInfo: ScreenInfo) { }

  ngOnInit() {
  }
  NavigateToNewStreamlineAppPage() {
    // alert("create New app");
    this.router.navigate(['app-streamline-loan-app']);

  }

  NavigateToNewFullAppPage() {
    // alert("create New app");
    this.router.navigate(['app-full-loan-app']);

  }
}
