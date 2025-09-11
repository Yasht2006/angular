import { Component } from '@angular/core';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
users: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.users = this.authService.getRegisteredUsers();
  }

  viewUser(user: any): void {
  alert(`Viewing user: ${user.email}`);
  // You can navigate to detail page if needed
}

editUser(user: any): void {
  alert(`Editing user: ${user.email}`);
  // You can navigate to edit form if needed
}

deleteUser(id: number): void {
  if (confirm('Are you sure you want to delete this user?')) {
    this.users = this.users.filter(u => u.id !== id);
    localStorage.setItem('registeredUsers', JSON.stringify(this.users));
  }
}

}
