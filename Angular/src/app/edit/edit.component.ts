import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { IWeatherForecast } from '../Models/WeatherForecast';
import { WeatherForecast } from '../Models/weatherforecastClass';
import { WeatherService } from '../weatherService';

@Component({
  selector: 'app-editor',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  weather: WeatherForecast = new WeatherForecast();
  dataSource: IWeatherForecast[] = [];
  id: any;

  constructor(private weatherService: WeatherService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.weather.id = this.data.id;
    this.weather.temperatureC = this.data.tempC;
    this.weather.summary = this.data.summary;
  }

  updateWeather() {
    this.weather.date = new Date();
    this.weatherService.editWeather(this.weather).subscribe((_) => {
      this.weatherService.getWeather().subscribe((temps: IWeatherForecast[]) => {
        this.dataSource = temps;
        this.refresh()
      });
    });
  }
  refresh(): void {
    window.location.reload();
  }
}
