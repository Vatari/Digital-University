import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationService } from '../common/toastr.service';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

const HOST = 'http://localhost:4000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  currentUser = this.tokenService.getUser();

  constructor(
    private http: HttpClient,
    private toastr: NotificationService,
    private router: Router,
    private tokenService: TokenService
  ) {}

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
          this.toastr.success('Успешно влизане');
          this.user = {
            _id: data._id,
            username: data.username,
            firstName: data.firstName,
            lastName: data.lastName,
          };
          this.tokenService.saveUser(this.user);

          this.tokenService.saveToken(data.accessToken);
          this.currentUser = this.user;
          this.router.navigate(['events']);
        },
        error: (err) => {
          this.toastr.error(err.error.message);
          this.router.navigateByUrl('user/login');
        },
      });
  }

  registerUser(
    username: string,
    firstName: string,
    lastName: string,
    password: string
  ) {
    let registerData = {
      username: username,
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
          this.toastr.success('Регистрацията е успешна');

          this.user = {
            _id: data._id,
            username: data.username,
            firstName: data.firstName,
            lastName: data.lastName,
          };
          this.tokenService.saveUser(this.user);

          this.tokenService.saveToken(data.accessToken);
          this.currentUser = this.user;
        },
        error: (err) => {
          this.toastr.error(err.error.message);
        },
      });
  }

  logoutUser() {
    this.tokenService.signOut();
    this.http.get(HOST + '/users/logout');
    this.router.navigate(['events']);
  }

  updateCurrentUser(firstName: string, lastName: string) {
    let data = {
      firstName,
      lastName,
    };

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: data,
    };
    return this.http.put<any>(HOST + '/users/update', data, options).subscribe({
      next: (data) => {
        this.currentUser.firstName = data.firstName;
        this.currentUser.lastName = data.lastName;

        this.toastr.success('Профила е обновен');
      },
      error: (err) => {
        this.toastr.error(err.error.message);
      },
    });
  }
}
