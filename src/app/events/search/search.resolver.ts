import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { map } from 'rxjs';
import { EventService } from '../shared';

@Injectable({
  providedIn: 'root',
})
export class SearchResolver implements Resolve<any> {
  constructor(private eventService: EventService, private route: Router) {}
  resolve(router: ActivatedRouteSnapshot) {
    const query = router.queryParams['query'];

    return this.eventService.searchEvents(query).pipe(map((events) => events));
  }
}
