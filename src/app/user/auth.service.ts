import { Injectable } from '@angular/core';
import { IUser } from './user-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { NotificationService } from '../common/toastr.service';

const HOST = 'http://localhost:4000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser!: IUser;

  constructor(private http: HttpClient, private toastr: NotificationService) {}
  /*   isAuth() {
    return !!this.currentUser;
  } */

  isAuth: boolean = false;

  loginUser(userName: string, password: string) {
    let loginData = { username: userName, password: password };

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: loginData,
    };
    return this.http
      .post<any>(HOST + '/users/login', loginData, options)
      .subscribe({
        next: (data) => {
          this.toastr.success('Login successfull');
          this.isAuth = true;
        },
        error: (err) => {
          this.toastr.error(err.error.message);
        },
      });
  }

  registerUser(
    userName: string,
    firstName: string,
    lastName: string,
    password: string
  ) {
    let registerData = {
      username: userName,
      firstName: firstName,
      lastName: lastName,
      password: password,
    };

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: registerData,
    };
    return this.http
      .post<any>(HOST + '/users/register', registerData, options)
      .subscribe({
        next: (data) => {
          this.toastr.success('Registration successfull');
          this.isAuth = true;
        },
        error: (err) => {
          this.toastr.error(err.error.message);
        },
      });
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
