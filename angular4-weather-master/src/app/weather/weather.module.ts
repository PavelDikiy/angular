import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherService} from '../shared/services/weather.service';
import {WeatherNowComponent} from './weather_now/weather.component';
import {WeatherComponent} from './weather.component';
import {MyOwnCustomMaterialModule} from '../shared/modules/my-own-custom-material.module';
import {PizzaPartyAppModule} from '../shared/modules/pizza-party-app.module';

@NgModule({
  imports: [
    CommonModule,   PizzaPartyAppModule,
    MyOwnCustomMaterialModule,
  ],
  declarations: [    WeatherComponent, WeatherNowComponent],
  providers: [WeatherService],
})
export class WeatherModule { }
