import { Component } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import {CommonModule} from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  constructor(private housingService: HousingService) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  search(text: string) {
    if (!text) {
      this.filteredLocationList =  this.housingLocationList;
    } else {
      this.filteredLocationList = this.housingLocationList.filter(el => (el.name.toLowerCase().includes(text.toLowerCase())))
    }

  }
}
