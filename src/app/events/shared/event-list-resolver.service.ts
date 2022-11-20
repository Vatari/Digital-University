import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root',
})
export class EventListResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}
  resolve() {
    return this.eventService.getEvents().pipe(map((events) => events));
  }
}
