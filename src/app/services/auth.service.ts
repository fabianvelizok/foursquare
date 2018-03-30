import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {
    this.isUserLoggedIn();
  }

  public login (data) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(data.email, data.password)
      .then(() => console.log('User logged in successfully.'))
      .catch(error => console.error(error));
  }

  public register (data) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
      .then(() => console.log('User registered successfully.'))
      .catch(error => console.error(error));
  }

  public isUserLoggedIn () {
    return this.angularFireAuth.authState;
  }

  public facebookLogin () {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(response => console.log('User logged in with facebook successfully.'))
      .catch(error => console.error(error));
  }
}
