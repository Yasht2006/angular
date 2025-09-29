import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing-module';
import { EventCalendar } from './event-calendar/event-calendar';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EventCalendar
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
      CalendarModule.forRoot({
      provide: DateAdapter, useFactory: adapterFactory
    }),
    FormsModule
  ],
  exports:[
    EventCalendar
  ]
})
export class LayoutModule { }
