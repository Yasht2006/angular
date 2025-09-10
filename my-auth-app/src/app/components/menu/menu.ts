import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
constructor(private auth: Auth) {}

  logout() {
    this.auth.logout();
  }
}
