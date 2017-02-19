import { Pipe } from '@angular/core';

@Pipe({name: 'pluralize'})
export class PluralizePipe {
  transform(value: number): string {
    return value > 1 ? 's' : '';
  }
}
