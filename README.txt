new to install npm and link to ng
npm install — save @ng-bootstrap/ng-bootstrap
npm install --save @angular/material @angular/cdk
npm install --save hammerjs
npm i -g npm to update
npm link angular-cli
npm install -g @angular/cli 
npm install material-design-icons
npm install less
tsd install es6-promise  //this will install types, you need to import to use it  ///  <reference path="../typings/es6-promise/es6-promise.d.ts"/>

to create a new project 

ng new NewAngularProject

to create a package to install to webserver

ng build --prod --base-href /ePortal/

copy dist folder to location where iis APP is going to point

c:\inetpub\wwwroot\ePortal

create an app and point to inetpub

create a web.config with url rewrite

    <action type="Rewrite" url="/ePortal/" />

transform Json to class
    npm install class-transformer --save
    npm install reflect-metadata --save

npm install angular-ui-grid --save
http://ui-grid.info/docs/#!/tutorial


npm install @angular/flex-layout --save

how to use font awesome

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">