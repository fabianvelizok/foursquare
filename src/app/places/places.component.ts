import { Component } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
  places: any = [
    { subscription: 'premium', distance: 1, active: true, name: 'Argentina' },
    { subscription: 'free', distance: 2, active: true, name: 'España' },
    { subscription: 'free', distance: 3, active: false, name: 'India' },
    { subscription: 'free', distance: 3, active: false, name: 'China' },
    { subscription: 'premium', distance: 1, active: true, name: 'Colombia' },
  ];

  lat: number = 51.678418;
  lng: number = 7.809007;
}
