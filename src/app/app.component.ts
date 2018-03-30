import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
