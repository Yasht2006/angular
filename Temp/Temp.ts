import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private users: { username: string, password: string }[] = [];
  private isLoggedIn = false;
  private readonly USERS_KEY = 'auth_users';
  private readonly LOGGED_IN_KEY = 'auth_logged_in_user';

  constructor(private router: Router) {
    this.loadUsersFromStorage();
    this.loadAuthStatus();
  }

  private loadUsersFromStorage(): void {
    const usersJson = localStorage.getItem(this.USERS_KEY);
    if (usersJson) {
      this.users = JSON.parse(usersJson);
    } else {
      // Initialize with default users if not found in localStorage
      this.users = [
        { username: 'user1', password: 'pass1' },
        { username: 'user2', password: 'pass2' }
      ];
      this.saveUsersToStorage();
    }
  }

  private saveUsersToStorage(): void {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(this.users));
  }

  private loadAuthStatus(): void {
    const loggedInUser = localStorage.getItem(this.LOGGED_IN_KEY);
    this.isLoggedIn = !!loggedInUser;
  }

  private saveAuthStatus(username: string): void {
    localStorage.setItem(this.LOGGED_IN_KEY, username);
  }

  private clearAuthStatus(): void {
    localStorage.removeItem(this.LOGGED_IN_KEY);
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    this.isLoggedIn = !!user;

    if (this.isLoggedIn) {
      this.saveAuthStatus(username);
    }

    return this.isLoggedIn;
  }

  register(username: string, password: string): void {
    this.users.push({ username, password });
    this.saveUsersToStorage();
  }

  logout(): void {
    this.isLoggedIn = false;
    this.clearAuthStatus();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
