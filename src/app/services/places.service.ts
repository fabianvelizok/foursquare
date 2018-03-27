import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Place } from '../models/place';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable()
export class PlacesService {
  FIREBASE_DB = environment.firebase.databaseURL;

  placesCollection: AngularFirestoreCollection<Place>;
  places: Observable<Place[]>;
  placeDoc: AngularFirestoreDocument<Place>;
  place: Observable<Place> = null;

  constructor(public db: AngularFirestore, private http: Http) {
    this.places = this.db.collection('places').snapshotChanges().map((changes) => {
      return changes.map((a) => {
        // Get place id from db.
        const place = a.payload.doc.data() as Place;
        place.id = a.payload.doc.id;
        return place;
      });
    });
  }

  public getList () {
    return this.places;
  }

  public getById (id) {
    this.placeDoc = this.db.doc(`places/${id}`);
    this.place = this.placeDoc.valueChanges();
    return this.place;
  }

  public save (place) {
    return this.db.collection('places').add(place);
  }

  public getGeolocation (address) {
    const url = `http://maps.google.com/maps/api/geocode/json?address=${address}`;
    return this.http.get(url);
  }

  public update(place: Place) {
    this.placeDoc.update(place);
  }

  // Using http instead of sockets.

  public saveHttp (place) {
    const endpoint = `${this.FIREBASE_DB}/places.json`;
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(endpoint, place, { headers });
  }

  public getListHttp() {
    const endpoint = `${this.FIREBASE_DB}/places.json`;
    return this.http.get(endpoint);
  }

}
