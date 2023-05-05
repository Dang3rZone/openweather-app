import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  public cities: string[] = [];
  public selectedCity: string | null = null;
  public weather: any = null;

  constructor(private weatherService: WeatherService) {}

  public onCitySelected(city: string) {
    this.selectedCity = city;
    this.weatherService.getWeather(city).subscribe((data) => {
      this.weather = data;
    });
  }

  public removeCity(city: string) {
    this.cities = this.cities.filter((c) => c !== city);
    if (this.selectedCity === city) {
      this.selectedCity = null;
      this.weather = null;
    }
  }
}
