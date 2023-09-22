  import { Component, VERSION } from '@angular/core';

  @Component({
    selector: 'my-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
  })
  export class AppComponent  {
    name = 'Angular ' + VERSION.major;
    inputUsername = {
      variant: "text",
      placeholder: "username",
    };
  
    inputPassword = {
      variant: "password",
      placeholder: "password",
    };
  
    button = {
      label: 'login',
      variant: 'submit',
    };
  }
  