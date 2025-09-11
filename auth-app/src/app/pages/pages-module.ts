import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { LayoutModule } from '../layout/layout-module';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Dashboard,
    About,
    Contact
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    FormsModule
  ],
})
export class PagesModule { }
