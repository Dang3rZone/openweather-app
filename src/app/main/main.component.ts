import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import cities from '../cities/cities.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [WeatherService],
})
export class MainComponent {
  public cities: string[] = cities;
  public selectedCity: string | null = null;
  public weather: any = null;
  public selectedCities: string[] = [];

  constructor(private weatherService: WeatherService) {}

  public onCitySelected(city: string) {
    this.selectedCity = city;
    this.selectedCities.push(city);
    this.weatherService.getWeather(city).subscribe((data) => {
      this.weather = data;
    });
  }

  public removeCity(city: string) {
    this.selectedCities = this.selectedCities.filter((c) => c !== city);
    if (this.selectedCity === city) {
      this.selectedCity = null;
      this.weather = null;
    }
  }

  // Public getter method to access the private weatherService property
  public getWeatherService() {
    return this.weatherService;
  }
}
