import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {PizzaPartyAppModule} from './shared/modules/pizza-party-app.module';
import {MyOwnCustomMaterialModule} from './shared/modules/my-own-custom-material.module';

import {WeatherModule} from './weather/weather.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,

    PizzaPartyAppModule,
    MyOwnCustomMaterialModule,
    AppRoutingModule,
    WeatherModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
