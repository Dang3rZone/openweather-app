import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public user!: string;
  public password!: string;

  constructor(private authService: AuthService, private router: Router) {}

  public onSubmit() {
    if (this.authService.login(this.user, this.password)) {
      this.router.navigate(['/main']);
    } else {
      // Mostrar mensaje de error
    }
  }
}
