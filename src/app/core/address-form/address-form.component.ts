import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/shared/services/address.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit {
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public addressService: AddressService,
    public snackbar: SnackbarService
  ) {}

  addressForm = this.fb.group({
    customerId: this.addressService.getCustomerId(),
    name: ['', Validators.required],
    mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
    state: ['', [Validators.required, Validators.minLength(3)]],
    city: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', [Validators.required, Validators.minLength(8)]],
    postalCode: [
      '',
      [Validators.required, Validators.maxLength(6), Validators.minLength(6)],
    ],
    locality: ['', [Validators.required, Validators.minLength(4)]],
    landmark: [''],
    alternateNumber: [''],
  });

  ngOnInit(): void {}

  handleSaveClick() {
    if (this.addressForm.valid) {
      this.addressService.saveAddress(this.addressForm.value).subscribe({
        next: (response: any) => {
          this.snackbar.open(response.message, 'OK!', 3000);
          this.router.navigate(['shop']);
        },
        error: (err: any) => {
          this.snackbar.open(err, 'OOPS!', 3000);
        },
      });
    } else {
      this.snackbar.open('Invalid details!', 'OOPS!', 2500);
    }
  }
}
