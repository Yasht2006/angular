import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardGuard } from './guard/auth-guard-guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages-module').then(m => m.PagesModule),
    canActivate: [authGuardGuard]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
