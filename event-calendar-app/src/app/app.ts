import { Component, signal } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import {
  addDays,
  startOfWeek,
  isSameDay
} from 'date-fns';

// Extend CalendarEvent type to include `id`
interface MyCalendarEvent extends CalendarEvent {
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('event-calendar-app');

  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  viewDate: Date = new Date();

  selectedDay: Date = new Date();

  selectedEventIds: Set<number> = new Set<number>();

  events: MyCalendarEvent[] = [
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
      start: new Date('2025-09-27T08:30:00'),
      end: new Date('2025-09-27T09:30:00'),
      title: 'Cricket',
      color: { primary: '#1e90ff', secondary: '#D1E8FF' },
    },
    {
      id: 4,
      start: new Date('2025-09-26T23:00:00'),
      end: new Date('2025-09-26T23:30:00'),
      title: 'Late Night Cricket',
      color: { primary: '#1e90ff', secondary: '#D1E8FF' },
    },
    {
      id: 5,
      start: new Date('2025-09-27T11:00:00'),
      end: new Date('2025-09-27T11:30:00'),
      title: 'Morning Cricket',
      color: { primary: '#1e90ff', secondary: '#D1E8FF' },
    }
  ];

  goToPreviousWeek() {
    this.viewDate = addDays(this.viewDate, -7);
    this.selectedDay = this.viewDate;
    this.selectedEventIds.clear();
  }

  goToToday() {
    this.viewDate = new Date();
    this.selectedDay = new Date();
    this.selectedEventIds.clear();
  }

  goToNextWeek() {
    this.viewDate = addDays(this.viewDate, 7);
    this.selectedDay = this.viewDate;
    this.selectedEventIds.clear();
  }

  onDayHeaderClicked(date: Date) {
    this.selectedDay = date;
    this.selectedEventIds.clear();
  }

  onEventClicked(event: CalendarEvent) {
    const myEvent = event as MyCalendarEvent;

    if (isSameDay(myEvent.start, this.selectedDay)) {
      if (this.selectedEventIds.has(myEvent.id)) {
        this.selectedEventIds.delete(myEvent.id);
      } else {
        this.selectedEventIds.add(myEvent.id);
      }

      this.events = [...this.events];
    }
  }

  getEventColor(event: MyCalendarEvent) {
    return this.selectedEventIds.has(event.id)
      ? { primary: '#28a745', secondary: '#d4edda' }  
      : event.color;
  }

  get coloredEvents(): MyCalendarEvent[] {
    return this.events.map(event => ({
      ...event,
      color: this.getEventColor(event),
    }));
  }
}
