import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Place } from '../models/place';
import { Observable } from 'rxjs';

@Injectable()
export class PlacesService {
  placesCollection: AngularFirestoreCollection<Place>;
  places: Observable<Place[]>;
  placeDoc: AngularFirestoreDocument<Place>;
  place: Observable<Place> = null;

  constructor(public db: AngularFirestore) {
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
}
