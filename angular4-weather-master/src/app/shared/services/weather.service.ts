import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class WeatherService {
  constructor(private http: Http) {
  }

  getWeather() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Kiev&lang=ru&units=metric&appid=4180508fab6e2089e6b41c283d6c42eb');
  }
}
