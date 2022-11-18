import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  mouseOverLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  register(formValues: any) {
    this.authService
      .registerUser(
        formValues.userName,
        formValues.firstName,
        formValues.lastName,
        formValues.password
      )
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }

  ngOnInit(): void {}
}
