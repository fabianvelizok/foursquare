import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() loggedIn;
  @Input() currentUser;

  constructor(private authService: AuthService) {}

  private logout() {
    this.authService.logout();
  }
}
