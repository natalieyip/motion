import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }
  weatherData;

  async getUserWeather(): Promise<any> {
   navigator.geolocation.getCurrentPosition(async (position) => {
      const long = position.coords.longitude;
      const lat = position.coords.latitude;

      const response = await fetch(
      `${environment.openWeatherUrl}lat=${lat}&lon=${long}&appid=${environment.openWeatherApiKey}`
    );

    const data = await response.json();
    return data;
    // this.weatherData = {
    //   cityName: data.name,
    //   cityTemperature: data.main.temp
    // }; 
    // return this.weatherData;
  });
}
}
