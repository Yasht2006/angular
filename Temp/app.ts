import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test-app');
  
   slots = [
    {
      days: [2, 3],
      numberofslots: 2,
      startTime: '20:00',
      endTime: '22:00',
    },
    {
      days: [2, 3],
      numberofslots: 1,
      startTime: '20:00',
      endTime: '21:00',
    },
    {
      days: [2, 3,4],
      numberofslots: 1,
      startTime: '20:00',
      endTime: '21:00',
    }
  ];

  weekDays = [
    { id: 1, name: 'MON' },
    { id: 2, name: 'TUE' },
    { id: 3, name: 'WED' },
    { id: 4, name: 'THU' },
    { id: 5, name: 'FRI' },
    { id: 6, name: 'SAT' },
    { id: 7, name: 'SUN' }
  ];

  // convert "HH:mm" -> minutes since 00:00
  private timeToMinutes(t: string): number {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  }

  // convert minutes -> "HH:mm" (wraps around 24h)
  private minutesToTime(mins: number): string {
    const total = ((Math.round(mins) % 1440) + 1440) % 1440;
    const hh = Math.floor(total / 60);
    const mm = total % 60;
    return `${('0' + hh).slice(-2)}:${('0' + mm).slice(-2)}`;
  }

  /**
   * Return an array of { start, end } strings for each sub-slot.
   * Handles end <= start as crossing to next day.
   */
  getRanges(slot: { startTime: string; endTime: string; numberofslots: number }) {
    const startM = this.timeToMinutes(slot.startTime);
    const endM = this.timeToMinutes(slot.endTime);
    const totalMinutes = (endM <= startM) ? (endM + 24 * 60 - startM) : (endM - startM);
    const n = Math.max(1, Math.floor(slot.numberofslots || 1));
    const step = totalMinutes / n;

    const ranges: { start: string; end: string }[] = [];
    const absoluteStart = startM;             
    const absoluteEnd = startM + totalMinutes; 

    for (let i = 0; i < n; i++) {
      const s = Math.round(absoluteStart + i * step);
      const e = (i === n - 1) ? Math.round(absoluteEnd) : Math.round(absoluteStart + (i + 1) * step);

      ranges.push({
        start: this.minutesToTime(s),
        end: this.minutesToTime(e)
      });
    }
    return ranges;
  }

}
