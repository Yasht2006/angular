import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
loginForm: FormGroup;
  showFormError = false;
  loginFailed = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.showFormError = true;
      return;
    }

    this.showFormError = false;

    const { email, password } = this.loginForm.value;
    const success = this.authService.login(email, password);

    if (success) {
      this.loginFailed = false;
      alert('Login successful!');
      this.router.navigate(['']); // Change to your protected route
    } else {
      this.loginFailed = true;
    }
  }
}
