import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = {};

  constructor(private authService: AuthService) {}

  private login() {
    this.authService.login(this.loginForm);
  }

  private loginFacebook () {
    this.authService.facebookLogin();
  }

  private loginGoogle () {
    this.authService.googleLogin();
  }
}
