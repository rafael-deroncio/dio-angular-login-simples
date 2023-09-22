import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';
import { ButtonComponent } from  './components/button.component';
import { InputTextComponent } from './components/input-text.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ButtonComponent, InputTextComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
