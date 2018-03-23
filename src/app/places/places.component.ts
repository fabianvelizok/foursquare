import { Component } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
  places: any = [
    { id: 1, subscription: 'premium', distance: 1, active: true, name: 'Argentina' },
    { id: 2, subscription: 'free', distance: 2, active: true, name: 'España' },
    { id: 3, subscription: 'free', distance: 3, active: false, name: 'India' },
    { id: 4, subscription: 'free', distance: 3, active: false, name: 'China' },
    { id: 5, subscription: 'premium', distance: 1, active: true, name: 'Colombia' },
  ];

  lat: number = 51.678418;
  lng: number = 7.809007;
}
