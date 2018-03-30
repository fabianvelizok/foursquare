import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  animations: [
    trigger('animatedContainer', [
      state('initial', style({
        opacity: 0,
        backgroundColor: 'green',
        transform: 'rotate3d(0, 0, 0, 0deg)'
      })),
      state('initial', style({
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'rotate3d(5, 10, 20, 30deg)'
      }))
    ])
  ]
})
export class PlacesComponent implements OnInit {
  places = [];
  error = null;
  state = 'initial'

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
}
