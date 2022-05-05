import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardScreenService {
  endpoint = environment.devUrl;
  user = JSON.parse(localStorage.getItem('user')!);

  constructor(private http: HttpClient) {}

  getCartData(userid: string) {
    return this.http.get(`${this.endpoint}users/getcart?id=${userid}`);
  }

  removeCartDataFromJson(payload: any) {
    return this.http.post(`${this.endpoint}users/cart`, payload);
  }

  incrementCartData(payload: any) {
    return this.http.post(`${this.endpoint}users/cart`, payload);
  }
  decrementCartData(payload: any) {
    return this.http.post(`${this.endpoint}users/cart`, payload);
  }

  viewCardOnLandingPage() {
    return this.http.get(`${this.endpoint}shop`);
  }
}
