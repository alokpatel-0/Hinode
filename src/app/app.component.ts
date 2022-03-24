import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hinode';
  constructor(private auth: AuthService) {}
  ngOnInit() {
    this.auth.setUserDetailsFromLocalDb();
  }
}
