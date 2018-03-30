import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {
  }

  public login (data) {
    console.log('LOGIN');
  }

  public register (data) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }
}
