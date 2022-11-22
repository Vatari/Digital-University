import { Injectable } from '@angular/core';
import { IUser } from './user-model';

const TOKEN = 'accessToken';
const USER_KEY = 'auth-user';
const USER = 'User';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  isLogged: Boolean = false;

  constructor() {}

  signOut(): void {
    window.sessionStorage.clear();
  }

  checkUserStatus() {
    if (TOKEN) {
      this.isLogged = true;
    }
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN);
    window.sessionStorage.setItem(TOKEN, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN);
  }

  public saveUser(user: any): void {
    //window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
