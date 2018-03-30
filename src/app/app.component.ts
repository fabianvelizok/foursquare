import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;
  currentUser: any = null;

  constructor(private authService: AuthService) {
    this.authService.isUserLoggedIn().subscribe(
      (response) => {
        this.loggedIn = Boolean(response && response.uid);
        this.currentUser = this.authService.getCurrentUser();
      },
      (error) => {
        console.error(error);
        this.loggedIn = false;
      }
    );
  }
}
