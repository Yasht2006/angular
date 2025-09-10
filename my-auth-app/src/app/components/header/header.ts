import { Component } from '@angular/core';
import { Auth, User } from '../../services/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
currentUser$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.currentUser$ = auth.currentUser$;
  }

  logout(): void {
    this.auth.logout();
  }
}
