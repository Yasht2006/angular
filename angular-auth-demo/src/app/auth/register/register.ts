import { Component } from '@angular/core';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
username = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

  register() {
    this.auth.register(this.username, this.password);
    alert('Registered successfully! Now login.');
    this.router.navigate(['/login']);
  }
}
