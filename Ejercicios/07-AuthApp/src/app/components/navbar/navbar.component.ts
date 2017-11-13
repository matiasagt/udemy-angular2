import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {

  constructor(private auth: AuthService) {
    auth.handleAuthentication();
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
