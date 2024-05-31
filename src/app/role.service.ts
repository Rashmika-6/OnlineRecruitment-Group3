import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private isAuthenticated = false;
  private userData: any = null;

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }
  saveUserData(user: any): void {
    this.userData = user; // Save user data to the property
    this.isAuthenticated = true;
  }
  getUserData() {
    return this.userData;
  }
}
