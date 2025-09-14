import { Routes } from '@angular/router';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';

export const routes: Routes = [
{ path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: Register },
    { path: '**', redirectTo: 'register' }
];
