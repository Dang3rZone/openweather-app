import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public user!: string;
  public password!: string;
  public errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  public onSubmit() {
    if (this.authService.login(this.user, this.password)) {
      this.router.navigate(['/main']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
