import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private isAuthenticated = false;

  login() {

    this.isAuthenticated = true;
  }

  logout() {
   
    this.isAuthenticated = false;
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }
}
