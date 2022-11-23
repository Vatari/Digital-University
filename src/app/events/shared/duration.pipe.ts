import { Pipe, PipeTransform } from '@angular/core';
//Това ми е custom pipe за duration



@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return '1 месец';
      case 2:
        return '3 месеца';
      case 3:
        return '6 месеца';
      case 4:
        return '1 година';
      default:
        return value.toString();
    }
  }
}
