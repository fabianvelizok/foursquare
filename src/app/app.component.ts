import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  places: any = [
    { distance: 1, active: true, name: 'Argentina' },
    { distance: 2, active: true, name: 'España' },
    { distance: 3, active: false, name: 'India' },
    { distance: 3, active: false, name: 'China' },
    { distance: 1, active: true, name: 'Colombia' },
  ];

  lat: number = 51.678418;
  lng: number = 7.809007;
}
