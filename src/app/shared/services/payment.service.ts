import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AddressService } from './address.service';
import { LoaderService } from './loader.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentService implements OnInit {
  constructor(
    public http: HttpClient,
    public addressService: AddressService,
    public router: Router,
    public loading: LoaderService,
    public snackbar: SnackbarService
  ) {}

  ngOnInit(): void {}

  options = {
    key: environment.razorpayKey,
    amount: '50000',
    currency: 'INR',
    name: 'Acme Corp',
    description: 'Test Transaction',
    image: '../../../assets/Images/zippyfullicon.png',
    order_id: 'orderId',

    handler: function (response: any) {
      var event = new CustomEvent('payment.success', {
        detail: response,
        bubbles: true,
        cancelable: true,
      });
      window.dispatchEvent(event);
    },
    prefill: {
      name: 'Gaurav Kumar',
      email: 'gaurav.kumar@example.com',
      contact: '9999999999',
    },
    notes: {
      address: 'Razorpay Corporate Office',
    },
    theme: {
      color: '#3399cc',
    },
  };

  handleRazorPay(address: string) {
    this.createRazorpayOrderId(address).subscribe((res: any) => {
      this.options.order_id = res.id;
      const rzp1 = new Razorpay(this.options);
      this.loading.hide();
      rzp1.open();

      rzp1.on('payment.failed', (response: any) => {
        this.snackbar.open(response.error.description, 'OOPS!', 3000);
      });
    });
  }

  createRazorpayOrderId(deliveryAddress: string) {
    const data = {
      customerId: this.addressService.getCustomerId(),
      orderStatus: 'ONP',
      paymentStatus: 'pending',
      deliveryAddress: deliveryAddress,
      paymentSession: {},
      paymentToken: null,
    };
    this.loading.show();

    return this.http.post(`${environment.devUrl}payment/create-payment`, data);
  }

  initializeStripePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: environment.stripeKey,
      locale: 'auto',
      token: (stripeToken: any) => {
        console.log({ stripeToken });
        this.router.navigate(['shop']);
        this.snackbar.open('Payment Success!', 'YAY!', 3000);
      },
    });

    paymentHandler.open({
      name: 'Zippy',
      description: 'Buying an Item from Shop',
      amount: amount * 100,
    });
  }
}
