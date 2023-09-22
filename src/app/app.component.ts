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
      value: '' // Adicione esta propriedade
    };
  
    inputPassword = {
      variant: "password",
      placeholder: "password",
      value: '' // Adicione esta propriedade
    };
  
    button = {
      label: 'login',
      variant: 'submit',
    };
  
    onUsernameChange(value: string) {
      this.inputUsername.value = value;
    }
  
    onPasswordChange(value: string) {
      this.inputPassword.value = value;
    }
  }
  