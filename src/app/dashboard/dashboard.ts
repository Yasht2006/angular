import { Component } from '@angular/core';
import { Auth } from '../auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
constructor(private auth: Auth, private router: Router) {}

  logout() {
    this.auth.logout();
  }
}
