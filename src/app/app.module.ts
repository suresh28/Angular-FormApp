import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
//import { HomeComponent }  from './forms/home.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule, HttpModule],
  declarations: [ AppComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
