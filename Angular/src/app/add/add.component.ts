
import { Component } from '@angular/core';
import { WeatherService } from '../weatherService';

import { IWeatherForecast } from '../Models/WeatherForecast';
import { WeatherForecast } from '../Models/weatherforecastClass';

@Component({
  selector: 'app-creator',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  weather: WeatherForecast = new WeatherForecast();

  dataSource: IWeatherForecast[] = [];
  constructor(private weatherInfo : WeatherService) {}


  createWeather(){
    console.log(this.weather);
    this.weather.date = new Date();
    this.weatherInfo.createWeather(this.weather).subscribe((_) => {
      this.weatherInfo.getWeather().subscribe((temps) =>{
        this.dataSource = temps;
        this.Refresh();
      });
    });
  }

  Refresh(): void {
    window.location.reload();
  }



}
