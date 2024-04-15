import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string='';
  password: string='';
  message: string='';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.email, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.message = 'Login successful!';
        },
        error => {
          console.log(error);
          this.message = 'Invalid email or password.';
        });
  }
}