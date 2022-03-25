import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardScreenService {
  endpoint = environment.devUrl;
  user = JSON.parse(localStorage.getItem('user')!);
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.user.token}`,
  });
  constructor(private http: HttpClient) {}

  getCartData(userid: string) {
    return this.http.get(`${this.endpoint}users/getcart?id=${userid}`, {
      headers: this.headers,
    });
  }

  removeCartDataFromJson(payload: any) {
    return this.http.post(`${this.endpoint}users/cart`, payload, {
      headers: this.headers,
    });
  }

  incrementCartData(payload:any){
    return this.http.post(`${this.endpoint}users/cart`, payload, {
      headers: this.headers,
    });
  }
  decrementCartData(payload:any){
    return this.http.post(`${this.endpoint}users/cart`, payload, {
      headers: this.headers,
    });
  }
  
  viewCardOnLandingPage(){
    return this.http.get(`${this.endpoint}shop` , {
      headers : this.headers
    })
  }
}
