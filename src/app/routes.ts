import { Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouteActivatorService } from './events/event-details/route-activator.service';
import { EventsListComponent } from './events/events-list.component';
import { EventListResolverService } from './events/shared/event-list-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolverService },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [RouteActivatorService],
  },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
