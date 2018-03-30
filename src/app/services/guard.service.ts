import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class GuardService implements CanActivate {
  loggedIn = false;

  constructor(private authService: AuthService) {
    this.authService.isUserLoggedIn().subscribe(
      (response) => {
        this.loggedIn = Boolean(response && response.uid);
      },
      (error) => {
        console.error(error);
        this.loggedIn = false;
      }
    );
  }

  canActivate() {
    return this.loggedIn;
  }
}
