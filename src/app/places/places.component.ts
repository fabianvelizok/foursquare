import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places = [];
  error = null;

  constructor(private placesService: PlacesService) {}

  ngOnInit(){
    this.placesService.getList()
      .subscribe(
        (response) => {
          this.places = response;
        },
        error => this.error = `Error: ${error.statusText}.`
      );
  }

  lat: number = 51.678418;
  lng: number = 7.809007;
}
