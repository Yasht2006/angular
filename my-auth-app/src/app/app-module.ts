import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Header } from './components/header/header';
import { Dashboard } from './components/dashboard/dashboard';
import { ReactiveFormsModule } from '@angular/forms';
import { Menu } from './components/menu/menu';

@NgModule({
  declarations: [
    App,
    Login,
    Register,
    Header,
    Dashboard,
    Menu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
