import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (!this.loginForm.valid) return;
    const { username, password } = this.loginForm.value;
    this.auth.login(username, password).subscribe(success => {
      if (success) {
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Invalid credentials.';
      }
    });
  }

}
