import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = environment.devUrl;
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.api}auth/login`, data);
  }
  register(data: any) {
    return this.http.post(`${this.api}auth/signup`, data);
  }
}
