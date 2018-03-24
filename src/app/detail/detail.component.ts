import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  id = null;
  place = {};

  constructor(private route: ActivatedRoute, private placesService: PlacesService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    const self = this;
    this.placesService.getById(this.id)
      .then(function (doc) {
        if (doc.exists) {
          self.place = doc.data();
        } else {
          console.error('Document not found.');
        }
      }).catch((error) => {
        console.error(error);
      });
  }
}
