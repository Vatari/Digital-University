import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  mouseOverLogin: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  login(formValues: any) {
    this.authService.loginUser(formValues.username, formValues.password);
  }
  cancel() {
    this.router.navigate(['events']);
  }
}
