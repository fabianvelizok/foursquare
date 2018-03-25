import { Component, OnInit } from '@angular/core';
import { PlacesService} from '../services/places.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css']
})

export class CreatePlaceComponent implements OnInit {
  place: any = {};
  id: any = null;
  isEditing: boolean = true;

  constructor(
    private placesService: PlacesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];
    this.isEditing = Boolean(this.id);
  }

  ngOnInit () {
    if (this.isEditing) {
      const self = this;

      this.placesService.getById(this.id).subscribe((place) => {
        this.place = place;
      });
    }
  }

  private createPlace() {
    const address = `${this.place.street}, ${this.place.city}, ${this.place.country}`;
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
          .then(() => {
            this.cleanFormAndRedirect();
          })
          .catch(error => console.error(error));
      });
  }

  private editPlace() {
    this.placesService.update(this.place);
    // @FIXME: Try / catch errors.
    this.cleanFormAndRedirect();
  }

  private cleanFormAndRedirect() {
    this.place = {};
    this.router.navigate(['places']);
  }
}
