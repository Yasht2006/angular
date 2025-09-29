  import { Component, signal } from '@angular/core';
  import { addDays, startOfWeek } from 'date-fns';

  @Component({
    selector: 'app-root',
    templateUrl: './app.html',
    standalone: false,
    styleUrls: ['./app.css']
  })
  export class App {
    protected readonly title = signal('event-calendar-app');

    events = [
      {
        id: 1,
        start: addDays(startOfWeek(new Date(), { weekStartsOn: 1 }), 1), // Tuesday
        end: addDays(startOfWeek(new Date(), { weekStartsOn: 1 }), 1),
        title: 'Meeting with Team',
        color: { primary: '#1e90ff', secondary: '#D1E8FF' },
      },
      {
        id: 2,
        start: addDays(new Date(), 2),
        title: 'Lunch with Client',
        color: { primary: '#1e90ff', secondary: '#D1E8FF' },
      },
      {
        id: 3,
        start: new Date('2025-09-30T08:30:00'),
        end: new Date('2025-09-30T09:30:00'),
        title: 'Cricket',
        color: { primary: '#1e90ff', secondary: '#D1E8FF' },
      },
      {
        id: 4,
        start: new Date('2025-09-30T23:00:00'),
        end: new Date('2025-09-30T23:30:00'),
        title: 'Late Night Cricket',
        color: { primary: '#1e90ff', secondary: '#D1E8FF' },
      },
      {
        id: 5,
        start: new Date('2025-09-30T11:00:00'),
        end: new Date('2025-09-30T11:30:00'),
        title: 'Morning Cricket',
        color: { primary: '#1e90ff', secondary: '#D1E8FF' },
      }
    ];
  }
