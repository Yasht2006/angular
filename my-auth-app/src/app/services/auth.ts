import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromLocalStorage());
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router) {}

  private getUserFromLocalStorage(): User | null {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
  }

  register(user: User): Observable<boolean> {
    // In a real app you'd call a backend — here we simply store locally
    localStorage.setItem('registeredUser', JSON.stringify(user));
    return of(true);
  }


  login(username: string, password: string): Observable<boolean> {
    const regJson = localStorage.getItem('registeredUser');
    if (regJson) {
      const reg = JSON.parse(regJson) as User;
      if (reg.username === username && reg.password === password) {
        localStorage.setItem('currentUser', regJson);
        this.currentUserSubject.next(reg);
        return of(true);
      }
    }
    return of(false);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }
}
