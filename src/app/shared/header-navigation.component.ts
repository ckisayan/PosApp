import { Component, OnInit, Input} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ScreenInfo } from './Entities/navigation.typedef';
import { NgControlStatus } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

declare var $: any;
@Component({
    selector: 'header-navigation',
    templateUrl: './header-navigation.component.html',
    styleUrls: ['./header-navigation.component.css'],
    
})

export class HeaderNavigationComponent implements OnInit {
    
    public name: string;
    public screenName: string;
    public showHeader: boolean;
    public isCollapsed: boolean;
    public isLogOffAvailable: boolean;
    constructor(public route: Router, public activeRoute: ActivatedRoute,public screenInfo: ScreenInfo) {        
        this.showHeader = true;
        this.isCollapsed=true;
        this.name = "Chris Isayan";        
        //this.screenInfo.ScreenName = "Home";
        this.screenName = this.screenInfo.ScreenName;
        this.isLogOffAvailable = false;
    }
    ngOnInit() {
        console.log("on init of header")
        console.log(this.route);
        console.log(this.activeRoute.snapshot.params);
        this.screenInfo.NavigatingFromScreen="menu";
    }
    onOpenMenu(menu: any, item: string): void {        
        this.screenName = item;

     }
    
}
