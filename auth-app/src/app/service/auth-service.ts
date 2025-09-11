import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = this.getUserFromLocalStorage();

  constructor(private router: Router) {
    this.initializeDefaultUsers();
  }


  private initializeDefaultUsers(): void {
    const users = this.getRegisteredUsers();
    if (users.length === 0) {
      const defaultUsers = [
        { id: 1, email: 'user1@example.com', password: 'password1' },
        { id: 2, email: 'user2@example.com', password: 'password2' }
      ];

      localStorage.setItem('registeredUsers', JSON.stringify(defaultUsers));
      localStorage.setItem('lastUserId', '2');
    }
  }

  private getUserFromLocalStorage(): any {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
  }

  public getRegisteredUsers(): any[] {
    const usersJson = localStorage.getItem('registeredUsers');
    return usersJson ? JSON.parse(usersJson) : [];
  }

  private saveRegisteredUsers(users: any[]): void {
    localStorage.setItem('registeredUsers', JSON.stringify(users));
  }

  private getNextUserId(): number {
    const lastId = localStorage.getItem('lastUserId');
    const nextId = lastId ? parseInt(lastId, 10) + 1 : 1;
    localStorage.setItem('lastUserId', nextId.toString());
    return nextId;
  }
  register(user: { email: string; password: string }): boolean {
    const users = this.getRegisteredUsers();

    if (users.some(u => u.email === user.email)) {
      return false; // email already exists
    }
    const newUser = {
      id: this.getNextUserId(),
      email: user.email,
      password: user.password
    };

    users.push(newUser);
    this.saveRegisteredUsers(users);
    return true;
  }
  login(email: string, password: string): boolean {
    const users = this.getRegisteredUsers();
    const matchedUser = users.find(u => u.email === email && u.password === password);

    if (matchedUser) {
      localStorage.setItem('currentUser', JSON.stringify(matchedUser));
      this.currentUser = matchedUser;
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }
}
