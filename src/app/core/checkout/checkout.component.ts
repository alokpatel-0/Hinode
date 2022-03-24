import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  //for temporary purpose will be replaced by actual data from api
  userLoggedIn: boolean = false;
  userAddress: Array<any> = [];
  orderSummaryContinue: boolean = false;

  paymentRadioGroup = this.fb.group({
    paymentOption: new FormControl('', [Validators.required]),
  });

  constructor(public fb: FormBuilder, public router: Router) {}

  ngOnInit(): void {}
}
