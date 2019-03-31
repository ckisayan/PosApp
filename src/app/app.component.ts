import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router, Event,ActivatedRoute } from '@angular/router';
import { ScreenInfo } from './shared/Entities/navigation.typedef';
import { GlobalConstants } from './shared/infrastructure/global-constants';



@Component({
  selector: 'lo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Mtg App';
  currentSoftwareVersion = GlobalConstants.currentSoftwareVersion;
  constructor(public route: Router, 
    private activeRoute: ActivatedRoute,
    private screenInfo: ScreenInfo) {    
    this.screenInfo.ScreenName="Dashboard";    
  }

  ngOnInit(): void {    
    

/*
    let maint=false;
    if (maint)
      this.route.navigate(['/maintenance']);
    else
      this.route.navigate(['/login']); 
  */
    }
  
}
