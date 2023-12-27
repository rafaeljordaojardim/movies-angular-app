import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  handleLogInOut() {
    if (this.isLoggedIn()) {
      this.loginService.logout();
    }
    return this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }
}
