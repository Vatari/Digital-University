import { Injectable, Input } from '@angular/core';
import { IUser } from './user-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationService } from '../common/toastr.service';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

const HOST = 'http://localhost:4000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: IUser;
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
          this.user = <IUser>data;
          this.tokenService.saveUser(this.user)
          console.log(data);
          
          this.tokenService.saveToken(data.accessToken);
        },
        error: (err) => {
          this.toastr.error(err.error.message);
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
          this.tokenService.saveToken(data.accessToken);

          this.user = <IUser>data;
        },
        error: (err) => {
          this.toastr.error(err.error.message);
        },
      });
  }

  logoutUser() {
    this.tokenService.signOut();
    this.router.navigate(['events']);
    this.http.get(HOST + '/users/logout');
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.user.firstName = firstName;
    this.user.lastName = lastName;
  }
}
