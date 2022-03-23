import { Component } from '@angular/core';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent {
  showLoginPage = true;

  handleToggleShowPage() {
    this.showLoginPage = !this.showLoginPage;
  }
  handleSideNavClose() {
    this.showLoginPage = true;
  }
  moveToLoginPage() {
    this.showLoginPage = true;
  }
}
