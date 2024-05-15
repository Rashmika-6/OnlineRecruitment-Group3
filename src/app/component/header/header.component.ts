import { Component } from '@angular/core';
import { RoleService } from '../../role.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public authService: RoleService, private router: Router) { }
     
    logout()
    {
    this.authService.logout(); 
    this.router.navigateByUrl('/login'); 
  }
  
}
