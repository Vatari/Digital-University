import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { map, take } from 'rxjs';
import { EventService } from '../shared';

@Injectable({
  providedIn: 'root',
})
export class EventDetailsResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']);
  }
}
