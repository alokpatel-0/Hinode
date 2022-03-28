import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import basicUser from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = environment.devUrl;
  isLogin = false;
  userDetails: basicUser = { email: '' };
  allDetails = new Subject();
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.api}auth/login`, data);
  }
  register(data: any) {
    return this.http.post(`${this.api}auth/signup`, data);
  }

  getUserFromLocalStorage() {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user) return user;
    return;
  }

  setUserDetailsFromLocalDb() {
    const data = JSON.parse(localStorage.getItem('user')!);
    if (data && data.user) {
      this.isLogin = true;
      this.allDetails.next(data);
      this.userDetails.email = data.user.email;
    }
  }
  logOut() {
    localStorage.removeItem('user');
    this.isLogin = false;
    this.userDetails = { email: '' };
  }
}
