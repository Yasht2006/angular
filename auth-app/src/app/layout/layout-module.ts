import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing-module';
import { Header } from './header/header';
import { Menu } from './menu/menu';


@NgModule({
  declarations: [
    Header,
    Menu
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  exports:[
    Header,
    Menu
  ]
})
export class LayoutModule { }
