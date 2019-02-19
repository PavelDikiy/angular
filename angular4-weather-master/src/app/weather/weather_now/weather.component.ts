import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../shared/services/weather.service';
import {Response} from '@angular/http';


@Component({
  selector: 'app-now-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherNowComponent implements OnInit {
  weather_obj = [];
  name_city = '';
  icon_url_svg = '';
  icon_url_png = '';
  description = '';
  main = '';
  clouds = '';
  temperatur = '';
  col = 0;
  latitude = '';
  longitude = '';
  statusw = false;

  constructor(private weatherServices: WeatherService) {
    setInterval(() => {
      this.start();
    }, 20000);
  }

  ngOnInit() {

    this.start();
    this.statusw = false;
  }

  start() {
    this.weatherServices
      .getWeather()
      .subscribe((response: Response) => {
        const result = response.json();
        console.log(result);
        this.weather_obj = result;
        this.name_city = result.name;
        this.icon_url_svg = 'assets/img_weather/' + (result.weather[0].icon) + '.svg';
        this.icon_url_png = 'http://openweathermap.org/img/w/' + (result.weather[0].icon) + '.png';
        this.description = result.weather[0].description;
        this.main = result.weather[0].main;
        this.clouds = result.clouds.all;
        this.temperatur = result.main.temp;
      });
    this.col++;
    console.log(this.col);
    this.statusw = true;
    setTimeout(() => {
      this.statusw = false;
    }, 2000);
  }

  refresh() {

    this.start();
  }

}
