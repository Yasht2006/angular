import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-calendar',
  templateUrl: './weekly-calendar.component.html',
  styleUrls: ['./weekly-calendar.component.scss']
})
export class WeeklyCalendarComponent implements OnInit {

  weekDays: { day: string, date: number }[] = [];
  currentMonth: string = '';

  ngOnInit(): void {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Monday

    this.weekDays = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return {
        day: date.toLocaleDateString('en-US', { weekday: 'short' }), // Mon, Tue, ...
        date: date.getDate()
      };
    });

    this.currentMonth = today.toLocaleDateString('en-US', { month: 'long' }); // September
  }

}
