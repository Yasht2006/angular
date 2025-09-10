import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' }
  ];

  private isLoggedIn = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    this.isLoggedIn = !!user;
    return this.isLoggedIn;
  }

  register(username: string, password: string): void {
    this.users.push({ username, password });
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
