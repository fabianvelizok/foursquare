import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  animations: [
    trigger('animatedContainer', [
      state('initial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('initial => final', animate(2000)),
      transition('final => initial', animate(1000)),
    ])
  ]
})
export class PlacesComponent implements OnInit {
  places = [];
  error = null;
  state = null;

  constructor(private placesService: PlacesService) {}

  ngOnInit(){
    this.state = 'initial';
    this.placesService.getList()
      .subscribe(
        (response) => {
          this.places = response;
          this.state = 'final';
        },
        error => this.error = `Error: ${error.statusText}.`
      );
  }

  animate() {
    this.state = (this.state === 'final') ?
      'initial' : 'final';
  }

  animationStart(event) {
    console.log('Start', event);
  }

  animationDone(event) {
    console.log('Done', event);
  }
}
