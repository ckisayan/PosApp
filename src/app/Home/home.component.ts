import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ScreenInfo } from '../shared/Entities/navigation.typedef';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {    
    constructor(public screenInfo : ScreenInfo) {
        console.log('Home Constractor');
    }
    ngOnInit() {        
        this.screenInfo.ScreenName="Home";
     }

    /*
    //Y29udGV4dD1yZWdpc3RyYXRpb24=

    public urlBase64Decode(str: string) {
        let output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: break;
            case 2: output += '=='; break;
            case 3: output += '='; break;
            default: throw 'Illegal base64url string!';
        }
        return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
            let code = p.charCodeAt(0).toString(16).toUpperCase();
            if (code.length < 2) {
                code = '0' + code;
            }
            return '%' + code;
        }));
    }
    */
}