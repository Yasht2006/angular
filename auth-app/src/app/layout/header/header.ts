import { Component } from '@angular/core';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
