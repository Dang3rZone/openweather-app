import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { MainComponent } from './main.component';
import { WeatherService } from '../weather.service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let weatherService: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Get the weather service instance
    weatherService = TestBed.inject(WeatherService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
