import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('user', JSON.stringify(response));
          this.snackBar.open('Logged in successfully!', 'OK!', 2500);
        },
        error: (err) => this.snackBar.open(err.error.message, 'OK!', 2500),
      });
    } else {
      this.snackBar.open('Invalid fields', 'OK!', 2500);
    }
  }
}
