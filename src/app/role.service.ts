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
    if (localStorage.getItem('Admin') === '1') {
      localStorage.setItem('Admin', '0');
      this.isAuthenticated = false;
    } else {
      this.isAuthenticated = false;
    }
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
