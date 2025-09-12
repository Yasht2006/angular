import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'; // Adjust path if needed
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html'
})
export class EditProfileComponent implements OnInit {
  editForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();

    if (!currentUser) {
      // Redirect to login if not logged in
      this.router.navigate(['/auth/login']);
      return;
    }

    this.editForm = this.fb.group({
      email: [currentUser.email, [Validators.required, Validators.email]],
      password: [currentUser.password, [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.editForm.invalid) {
      this.errorMessage = 'Please enter valid email and password.';
      return;
    }

    const { email, password } = this.editForm.value;

    const success = this.authService.editProfile({ email, password });

    if (success) {
      this.successMessage = 'Profile updated successfully.';
    } else {
      this.errorMessage = 'Failed to update profile. Email may already be in use.';
    }
  }
}
