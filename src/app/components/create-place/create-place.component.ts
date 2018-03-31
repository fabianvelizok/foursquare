import { Component, OnInit } from '@angular/core';
import { PlacesService} from '../../services/places.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css']
})

export class CreatePlaceComponent implements OnInit {
  place: any = {};
  id: any = null;
  isEditing = true;
  results$: Observable<any>;
  geocodeUrl = `http://maps.google.com/maps/api/geocode/json`;
  private searchField: FormControl;

  constructor(
    private placesService: PlacesService,
    private route: ActivatedRoute,
    private router: Router,
    private http: Http
  ) {
    this.id = this.route.snapshot.params['id'];
    this.isEditing = Boolean(this.id);

    // Typeahead
    this.searchField = new FormControl(); // Extend model
    this.results$ = this.searchField.valueChanges
      .debounceTime(500)
      .switchMap(query => this.http.get(`${this.geocodeUrl}?address=${query}`))
      .map(response => response.json())
      .map(response => response.results);
    console.log(this.results$);
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
        this.place.createdAt = new Date().getTime();

        this.placesService.save(this.place);
        this.cleanFormAndRedirect();
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

  private selectResult(result) {
    const addressComponents = result.address_components;
    this.place.street = `${this.findPlaceInResults('route', addressComponents)} ${this.findPlaceInResults('street_number', addressComponents)}`;
    this.place.city = this.findPlaceInResults('locality', addressComponents);
    this.place.country = this.findPlaceInResults('country', addressComponents);
  }

  private findPlaceInResults(place, addressComponents) {
    const result = addressComponents.find(address => address.types.includes(place));
    return result ? result.long_name : '';
  }
}
