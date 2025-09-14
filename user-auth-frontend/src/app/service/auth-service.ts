import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';


interface RegisterDTO {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface LoginDTO {
  email: string;
  password: string;
}

export interface RegisterDto {
  name: string;
  email: string;
  phone: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private readonly API_URL = 'https://localhost:7142/api/Auth/register';

  constructor(private http: HttpClient) {}

  register(user: RegisterDto): Observable<any> {
    return this.http.post(this.API_URL, user);
  }
}
