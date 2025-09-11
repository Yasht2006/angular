import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
registerForm: FormGroup;
showFormError = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }


  onSubmit(): void {
  if (this.registerForm.invalid) {
    // Mark all controls as touched to trigger validation messages
    this.registerForm.markAllAsTouched();
    this.showFormError = true;
    return;
  }

  this.showFormError = false;

  const { email, password } = this.registerForm.value;

  const success = this.authService.register({ email: email, password });

  if (success) {
    alert('Registration successful!');
    this.router.navigate(['/auth/login']);
  } else {
    alert('Email already registered!');
  }
}

}
