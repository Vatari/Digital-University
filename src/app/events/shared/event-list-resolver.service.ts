import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { catchError, map } from 'rxjs';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root',
})
export class EventListResolverService implements Resolve<any> {
  constructor(private eventService: EventService, private router: Router) {}
  resolve() {
    return this.eventService.getEvents().pipe(map((events) => events));
  }
}
