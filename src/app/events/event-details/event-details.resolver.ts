import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EventService } from '../shared';

@Injectable({
  providedIn: 'root',
})
export class EventDetailsResolver implements Resolve<any> {
  constructor(private eventService: EventService, private route: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']).subscribe({
      error: (err) => {
        this.eventService.errorHandler(err);
        this.route.navigate(['events']);
      },
    });
  }
}
