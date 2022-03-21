import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isReferFieldEnable = true;
  registerForm = this.fb.group({
    email: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  handleRefer() {
    this.isReferFieldEnable = false;
    this.registerForm.addControl('referCode', new FormControl(''));
  }
  handleRegister() {
    if (this.registerForm.valid) {
    }
  }
}
