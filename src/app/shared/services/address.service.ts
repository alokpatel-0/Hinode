import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Address } from '../models/addressModels';
@Injectable({
  providedIn: 'root',
})
export class AddressService {
  API_KEY = environment.devUrl;

  constructor(private http: HttpClient) {}

  saveAddress(userAddress: Address) {
    return this.http.post(`${this.API_KEY}users/save-address`, userAddress);
  }

  getAddress() {
    const custId = this.getCustomerId();
    return this.http.get(`${this.API_KEY}users/del-address?id=${custId}`);
  }

  getCustomerId() {
    const userData = JSON.parse(localStorage.getItem('user')!);
    if (userData) {
      return userData.user._id;
    }
    return;
  }
}
