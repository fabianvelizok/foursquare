import { Component } from '@angular/core';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
  places = []
  constructor(private placesService: PlacesService) {
    this.places = placesService.getList();
  }

  lat: number = 51.678418;
  lng: number = 7.809007;
}
