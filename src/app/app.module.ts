import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CarService} from "./services/CarService";
import {HttpClient} from "./services/HttpClient";
import {CarFactory} from "./factories/CarFactory";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpClient, CarService, CarFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
