import { Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { RouteActivatorService } from './events/event-details/route-activator.service';

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventListResolverService,
} from './events/index';
import { SessionComponent } from './events/session';

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
  { path: 'events/session/new', component: SessionComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((x) => x.UserModule),
  },
];
