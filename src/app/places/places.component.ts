import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places = [];

  constructor(private placesService: PlacesService) {}

  ngOnInit(){
    this.placesService.getList().subscribe((places) => {
      this.places = places;
    });
  }

  lat: number = 51.678418;
  lng: number = 7.809007;
}
