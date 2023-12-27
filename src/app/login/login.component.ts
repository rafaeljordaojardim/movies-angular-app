import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private loggedIn = false;
  @ViewChild('usernameInput', {static: true}) usernameInput: ElementRef;
  @ViewChild('passwordInput', {static: true}) passwordInput: ElementRef;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loggedIn = this.loginService.isLoggedIn();
  }


  login(event) {
    event.preventDefault();
    const username = this.usernameInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;
    this.loggedIn = this.loginService.login(username, password);
    if (this.loggedIn) {
      return this.router.navigateByUrl('/movies');
      // navigate does not work
    }
    alert("Invalid credentials")
  }
}
