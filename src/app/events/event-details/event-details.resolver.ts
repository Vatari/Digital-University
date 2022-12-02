import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError, map } from 'rxjs';
import { EventService } from '../shared';

@Injectable({
  providedIn: 'root',
})
export class EventDetailsResolver implements Resolve<any> {
  constructor(private eventService: EventService, private route: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']).pipe(
      map((data) => {
        return data;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status != 200) {
          this.route.navigate(['/404']);
        } else {
          return error.error;
        }
      })
    );
  }
}
