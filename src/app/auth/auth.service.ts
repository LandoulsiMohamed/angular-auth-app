import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  login(): void {
    localStorage.setItem('token', 'dummyToken');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
