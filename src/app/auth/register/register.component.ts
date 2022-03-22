import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/services/auth.service';

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
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }

  handleRefer() {
    this.isReferFieldEnable = false;
    this.registerForm.addControl('referCode', new FormControl(''));
  }
  error(err: any) {
    this.openSnackBar(err.error.message, 'ok');
  }
  handleRegister() {
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value).subscribe(
        (response) => {
          this.openSnackBar('register successfully!', 'ok');
        },

        (err) => this.error(err)
      );
    } else {
      this.openSnackBar('invalid detials!', 'ok');
    }
  }
}
