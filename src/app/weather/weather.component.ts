import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getUserWeather().then(d => console.log(d))
  }
  

}
