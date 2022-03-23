import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import basicUser from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private snackBar: SnackbarService
  ) {}

  handleLogin() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          localStorage.setItem('user', JSON.stringify(response));
          document.getElementById('side-nav-close-btn')?.click();
          this.snackBar.open('Logged in successfully!', 'OK!', 2500);
          this.auth.isLogin = true;
          this.auth.userDetails.email = response.user.email;
          this.loginForm.reset();
          this.loginForm.markAsPristine();
          this.loginForm.markAsUntouched();
        },
        error: (err) => this.snackBar.open(err.error.message, 'OK!', 2500),
      });
    } else {
      this.snackBar.open('Invalid fields', 'OK!', 2500);
    }
  }
}
