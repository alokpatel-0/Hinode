import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShopDetailsService {
  api = environment.devUrl;
  constructor(private http: HttpClient) {}
  getAvailableCategory() {
    return this.http.get(`${this.api}admin/category`);
  }
  getShopDataWithId(id: string) {
    return this.http.get(`${this.api}getShopData?payload=${id}`);
  }
  addToCart(data: any) {
    return this.http.post(`${this.api}users/cart`, data);
  }
  removeFromCart(data: any) {
    return this.http.post(`${this.api}users/cart`, data);
  }
}
