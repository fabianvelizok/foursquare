import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  places: any = [
    { id: 1, subscription: 'premium', distance: 1, active: true, name: 'Argentina' },
    { id: 2, subscription: 'free', distance: 2, active: true, name: 'España' },
    { id: 3, subscription: 'free', distance: 3, active: false, name: 'India' },
    { id: 4, subscription: 'free', distance: 3, active: false, name: 'China' },
    { id: 5, subscription: 'premium', distance: 1, active: true, name: 'Colombia' },
  ];

  id = null;
  place = {};

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.place = this.places.find((place) => {
      return place.id === parseInt(this.id, 10);
    });
  }
}
