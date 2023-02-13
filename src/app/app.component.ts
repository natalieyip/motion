import { Component, OnInit } from '@angular/core';
import { Observable, timer, map } from 'rxjs';
import { environment } from '../../environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }
  dateTime: Observable<Date>;
  weatherData: WeatherData;
  WeatherType: typeof WeatherType = WeatherType;
  isLoadingWeather = true; 

  ngOnInit(): void {
    this.dateTime = timer(0, 1000).pipe(
      map(() => {
        return new Date();
      })
    )
    this.getUserWeather();
  }

  getUserWeather(): void {
      navigator.geolocation.getCurrentPosition( async (position) => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;

        const response = await fetch(
        `${environment.openWeatherUrl}lat=${lat}&lon=${long}&appid=${environment.openWeatherApiKey}&units=imperial`
      );

      const data = await response.json();
      this.isLoadingWeather = false;
      this.weatherData = {
        cityName: data.name,
        cityTemperature: Math.floor(data.main.temp),
        weatherType: data.weather[0].main
      }; 
    });
  }
}

export class WeatherData {
  cityName: string;
  cityTemperature: number;
  weatherType: WeatherType
}

export enum WeatherType {
  rain = 'Rain',
  sun = 'Sun',
  clouds = 'Clouds',
  snow = 'Snow'
}
