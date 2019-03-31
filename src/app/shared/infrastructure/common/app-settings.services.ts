import { Injectable } from '@angular/core';

import {ServiceConfig} from '../settings';
//import {ServiceData} from '../config/serviceConfig.json';
//import  d1 from '../config/serviceConfig.json';

@Injectable()
export class AppSettingsService {
    serviceConfig: ServiceConfig;
    
    constructor() {

        //var fs = require('fs');
        //this.serviceConfig = require('../config/serviceConfig.json');

        console.log ("appsettings services loaded");
        console.log(this.serviceConfig.appUrl);
        //var fs=
        
    }
    
}