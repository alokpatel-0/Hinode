import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardScreenService {
  endpoint = environment.devUrl
  constructor(private http: HttpClient) {}

  getCartData() {
    return this.http.get(`${this.endpoint}users/getcart?id=userid`);
  }
}
