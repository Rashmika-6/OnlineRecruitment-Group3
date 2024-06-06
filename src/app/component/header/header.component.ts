import { Component } from '@angular/core';
import { RoleService } from '../../role.service';
import { Router } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    public authService: RoleService,
    private router: Router,
    private location: Location,
    private platformLocation: PlatformLocation
  ) {}

  logout() {
    this.authService.logout();
    console.log('Logging out and redirecting to login');

   
    this.router.navigateByUrl('/login', { replaceUrl: true }).then(() => {
   
      history.pushState(null, '', location.href);
      this.platformLocation.onPopState(() => {
        history.pushState(null, '', location.href);
      });
    });
  }
}
