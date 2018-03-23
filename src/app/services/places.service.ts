import { Injectable } from '@angular/core';

@Injectable()

export class PlacesService {
  places: any = [
    { id: 1, subscription: 'premium', distance: 1, active: true, name: 'Argentina', description: 'Some great place in Argentina' },
    { id: 2, subscription: 'free', distance: 2, active: true, name: 'España', description: 'Some great place in España' },
    { id: 3, subscription: 'free', distance: 3, active: false, name: 'India', description: 'Some great place in India' },
    { id: 4, subscription: 'free', distance: 3, active: false, name: 'China', description: 'Some great place in China' },
    { id: 5, subscription: 'premium', distance: 1, active: true, name: 'Colombia', description: 'Some great place in Colombia' },
  ];

  public getList () {
    return this.places;
  }

  public getById (id) {
    const currentPlace = this.places.find((place) => {
      return place.id === parseInt(id, 10);
    });
    return currentPlace;
  }
}


