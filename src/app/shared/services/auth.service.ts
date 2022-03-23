import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import basicUser from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = environment.devUrl;
  isLogin = false;
  userDetails!: basicUser;
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.api}auth/login`, data);
  }
  register(data: any) {
    return this.http.post(`${this.api}auth/signup`, data);
  }
  setUserDetailsFromLocalDb() {
    const data = JSON.parse(localStorage.getItem('user')!);
    if (data) {
      this.isLogin = true;
      this.userDetails = data;
    }
  }
  logOut() {
    localStorage.removeItem('user');
    this.isLogin = false;
    this.userDetails = { email: '' };
  }
}
