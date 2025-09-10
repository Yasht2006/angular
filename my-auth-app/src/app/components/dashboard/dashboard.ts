import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth, User } from '../../services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
currentUser$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.currentUser$ = this.auth.currentUser$;
  }
}
