import { Component, OnInit } from '@angular/core';
import { PlacesService} from '../services/places.service';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css']
})

export class CreatePlaceComponent {
  place: any = {};

  // Injects PlacesService in the scope.
  constructor(private placesService: PlacesService) {}

  private createPlace() {
    this.placesService.save(this.place).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
  }
}
