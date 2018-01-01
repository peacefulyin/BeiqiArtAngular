import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";
import { HomeComponent } from './home/index';
import { Test1Component } from './test1/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
