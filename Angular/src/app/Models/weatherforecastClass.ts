import { IWeatherForecast } from './WeatherForecast';

export class WeatherForecast implements IWeatherForecast {
  id!: number;
  date!: Date;
  temperatureC!: number;
  temperatureF!: number;
  summary!: string;
}
