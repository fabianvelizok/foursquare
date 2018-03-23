import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  id = null;
  place = {};

  constructor(private route: ActivatedRoute, private placesService: PlacesService) {
    this.id = this.route.snapshot.params['id'];
    this.place = placesService.getById(this.id);
  }
}
