import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
registerForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (!this.registerForm.valid) return;
    const user = this.registerForm.value;
    this.auth.register(user).subscribe(success => {
      if (success) {
        this.successMessage = 'Registration successful. Please log in.';
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Registration failed.';
      }
    });
  }
}
