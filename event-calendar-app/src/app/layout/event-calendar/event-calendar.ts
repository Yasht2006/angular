import { Component, Input } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { addDays, isSameDay, startOfWeek } from 'date-fns';


// Extend CalendarEvent type to include `id`
interface MyCalendarEvent extends CalendarEvent {
  id: number;
}

@Component({
  selector: 'app-event-calendar',
  standalone: false,
  templateUrl: './event-calendar.html',
  styleUrl: './event-calendar.css'
})
export class EventCalendar {
view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  viewDate: Date = new Date();

  selectedDay: Date = new Date();

  selectedEventIds: Set<number> = new Set<number>();

  @Input() events: MyCalendarEvent[] = [];


  ngOnInit(){
    this.events = [...this.events];
    console.log(this.events)
  }

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
