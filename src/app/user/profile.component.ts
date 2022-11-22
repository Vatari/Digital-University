import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../common/toastr.service';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  private firstName!: FormControl;
  private lastName!: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: NotificationService
  ) {}

  ngOnInit() {
    this.firstName = new FormControl(this.authService.user.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);
    this.lastName = new FormControl(this.authService.user.lastName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  saveProfile(formValues: any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(
        formValues.firstName,
        formValues.lastName
      );
      this.toastr.success('Profile successfully updated');
      this.router.navigate(['events']);
    }
  }
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
