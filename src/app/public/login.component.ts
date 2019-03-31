import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    constructor() {
        console.log('login Constractor');
    }
    ngOnInit() {
        console.log('login ngOnInit');
    }
}