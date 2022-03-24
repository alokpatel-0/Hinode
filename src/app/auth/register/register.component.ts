import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hide = true;
  isReferFieldEnable = true;
  @Output() isRegisterSuccessfully = new EventEmitter();
  registerForm = this.fb.group({
    email: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private snackBar: SnackbarService
  ) {}

  handleRefer() {
    this.isReferFieldEnable = false;
    this.registerForm.addControl('referCode', new FormControl(''));
  }

  handleRegister() {
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value).subscribe(
        (response) => {
          this.snackBar.open('User registered successfully', 'OK!', 2500);
          this.isRegisterSuccessfully.emit();
        },
        (err) => this.snackBar.open(err.error.message, 'OOPS!', 2500)
      );
    } else {
      this.snackBar.open('Invalid details', 'OOPS!', 2500);
    }
  }
}
