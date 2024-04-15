import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string ='';
  email: string ='';
  password: string='';
  message: string='';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.register(this.username, this.email, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.message = 'Registration successful!';
        },
        error => {
         console.log(error);
          this.message = 'Something Wrong.';
        });
  }
}