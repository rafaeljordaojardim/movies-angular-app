import { Injectable, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  private LOGIN_TOKEN_KEY = "LOGIN_TOKEN_KEY"
  private LOGIN_TOKEN_VALUE = "LOGIN_TOKEN_VALUE"
  private credentials = {
    username: "user",
    password: "123"
  }

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {}

  isLoggedIn() {
    return !!this.localStorage.get(this.LOGIN_TOKEN_KEY);
  }

  login(username, password) {
    console.log(username, password);
    if (this.credentials.username == username && this.credentials.password == password) {
      this.localStorage.set(this.LOGIN_TOKEN_KEY, this.LOGIN_TOKEN_VALUE);
      return true;
    }
    return false;
  }

  logout() {
    this.localStorage.remove(this.LOGIN_TOKEN_KEY);
  }

}
