import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = {};

  constructor(private authService: AuthService) {}

  private register() {
    this.authService.register(this.registerForm);
  }
}
