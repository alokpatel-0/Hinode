import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Address } from '../Models/addressModels';
@Injectable({
  providedIn: 'root',
})
export class AddressService {
  API_KEY = environment.devUrl;

  constructor(private http: HttpClient) {}

  saveAddress(userAddress: Address) {
    return this.http.post(`${this.API_KEY}users/save-address`, userAddress);
  }

  getCustomerId() {
    const userData = JSON.parse(localStorage.getItem('user')!);
    if (userData) {
      return userData.user._id;
    }
    return;
  }
}
