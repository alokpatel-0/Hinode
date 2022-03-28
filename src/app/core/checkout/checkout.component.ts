import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/shared/services/address.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PaymentService } from 'src/app/shared/services/payment.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  userData: any;
  currentCardIndex: number = 1;
  selectedUserAddress: any;
  userAddress: Array<any> = [];
  paymentButtonsDisable: boolean = false;
  paymentHandler: any = null;
  stripe: any;

  addressRadioGroup = this.fb.group({
    deliveryAddress: new FormControl('', [Validators.required]),
  });

  paymentRadioGroup = this.fb.group({
    paymentOption: new FormControl('', [Validators.required]),
  });

  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.paymentButtonsDisable = true;
    this.router.navigate(['shop']);
    this.snackbar.open('Payment Success!', 'YAY!', 3000);
  }
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public authService: AuthService,
    public addressService: AddressService,
    public payment: PaymentService,
    public snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.fetchUserAddresses();
    this.fetchUserData();
    if (this.authService.isLogin) {
      this.userData = this.authService.getUserFromLocalStorage();
    }
    this.invokeStripe();
  }

  fetchUserData() {
    this.authService.allDetails.subscribe((res) => {
      this.userData = res;
      this.fetchUserAddresses();
      this.changeCardIndexToExpand(2);
    });
  }

  fetchUserAddresses() {
    this.addressService.getAddress().subscribe({
      next: (res: any) => {
        if (res && res.data.length) {
          this.userAddress = res.data;

          this.addressRadioGroup.setValue({
            deliveryAddress: this.userAddress[0]._id,
          });
        }
      },
      error: (error) => console.log(error),
    });
  }

  changeCardIndexToExpand(index: number) {
    this.currentCardIndex = index;
  }

  getSelectedAddress() {
    return this.addressRadioGroup.get('deliveryAddress')?.value;
  }

  handleRazorpay() {
    this.payment.handleRazorPay(this.addressRadioGroup.value);
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: environment.stripeKey,
          locale: 'auto',
        });
      };
      window.document.body.appendChild(script);
    }
  }
}
