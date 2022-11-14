import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root',
})
export class RouteActivatorService implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const ifExists = !!this.eventService.getEvent(+route.params['id']);
    if (!ifExists) {
      this.router.navigate(['/404']);
    }
    return ifExists;
  }
}
