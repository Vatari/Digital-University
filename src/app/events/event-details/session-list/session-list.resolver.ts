import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { map } from 'rxjs';
import { EventService } from '../../shared';

@Injectable({
  providedIn: 'root',
})
export class SessionListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.loadSessions(route.params['id']).pipe(map((sessions) => sessions));
  }
}
