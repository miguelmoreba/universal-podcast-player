import { Pipe, PipeTransform } from '@angular/core';
import { debug } from 'console';

@Pipe({
  name: 'hourminsec'
})
export class HourminsecPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const milliseconds = Math.floor((value % 1000) / 100);
    const seconds = Math.floor((value / 1000) % 60);
    const minutes = Math.floor((value / (1000 * 60)) % 60);
    const hours = Math.floor((value / (1000 * 60 * 60)) % 24);

    const hoursFormatted = (hours < 10) ? "0" + hours : hours;
    const minutesFormatted = (minutes < 10) ? "0" + minutes : minutes;
    const secondsFormatted = (seconds < 10) ? "0" + seconds : seconds;

  return hours > 0 
    ? hoursFormatted + ":" + minutesFormatted + ":" + secondsFormatted
    : minutesFormatted + ":" + secondsFormatted
  }

}
