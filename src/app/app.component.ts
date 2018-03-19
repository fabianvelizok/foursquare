import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  places: any = [
    { active: true, name: 'Argentina' },
    { active: true, name: 'España' },
    { active: false, name: 'India' },
  ];

  lat: number = 51.678418;
  lng: number = 7.809007;
}
