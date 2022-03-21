import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isReferFieldEnable = true;
  registerForm = this.fb.group({
    email: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('in register');
  }
  handleRefer() {
    this.isReferFieldEnable = false;
    this.registerForm.addControl('referCode', new FormControl(''));
  }
  handleRegister() {
    if (this.registerForm.valid) {
      console.log('Register form data is ', this.registerForm.value);
    }
  }
}
