import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWeatherForecast } from './Models/WeatherForecast';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  idToSend: number | undefined;

  weatherEndpoint = 'api/WeatherForecast';

  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get<IWeatherForecast[]>(this.weatherEndpoint);
  }

  deleteWeather(weather: IWeatherForecast) {
    return this.http.delete(this.weatherEndpoint + '/' + weather.id);
  }

  editWeather(weather: IWeatherForecast) {
    return this.http.put<IWeatherForecast[]>(
      this.weatherEndpoint + '/' + weather.id,
      weather
    );
  }

  createWeather(weather: IWeatherForecast) {
    return this.http.post<IWeatherForecast[]>(this.weatherEndpoint, weather);
  }
}
