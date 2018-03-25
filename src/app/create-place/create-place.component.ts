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
    const address = `${this.place.street}, ${this.place.province}, ${this.place.country}`;
    this.placesService.getGeolocation(address)
      .subscribe((response) => {
        const data = response.json();
        let lat = 0;
        let lng = 0;

        if (data.results.length) {
          lat = data.results[0].geometry.location.lat;
          lng = data.results[0].geometry.location.lng;
        }

        this.place.lat = lat;
        this.place.lng = lng;

        this.placesService.save(this.place)
          .then(() => { console.log('Place created successfully.') })
          .catch(error => console.error(error));
      });
  }
}
