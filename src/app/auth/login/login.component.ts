import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import basicUser from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

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
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }

  error(err: any) {
    this.openSnackBar(err.error.message, 'ok');
  }

  handleLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value).subscribe(
        (response) => {
          localStorage.setItem('user', JSON.stringify(response));
          document.getElementById('side-nav-close-btn')?.click();
          this.auth.isLogin = true;
          this.auth.userDetails = response as unknown as basicUser;
          this.loginForm.reset();
          this.loginForm.markAsPristine();
          this.loginForm.markAsUntouched();
          this.openSnackBar('login successfully!', 'ok');
        },
        (err) => this.error(err)
      );
    } else {
      this.openSnackBar('invalid fields', 'ok');
    }
  }
}
