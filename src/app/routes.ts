import { Routes } from '@angular/router';
import { ContactsComponent } from './common/contacts/contacts.component';
import { StaffComponent } from './common/staff/staff.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { EventDetailsResolver } from './events/event-details/event-details.resolver';
import { RouteActivatorService } from './events/event-details/route-activator.service';
import { SessionListResolver } from './events/event-details/session-list/session-list.resolver';

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventListResolverService,
} from './events/index';
import { SearchComponent } from './events/search/search.component';
import { SearchResolver } from './events/search/search.resolver';
import { SessionComponent } from './events/session';
import { AuthGuard } from './events/shared/auth.guard';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canActivate: [AuthGuard],
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  { path: '404', component: NotFoundComponent },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolverService },
  },
  {
    path: 'events/search',
    component: SearchComponent,
    resolve: { searchedEvents: SearchResolver, query: SearchResolver },
    runGuardsAndResolvers: 'always',
  },

  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [RouteActivatorService],
    resolve: { event: EventDetailsResolver, sessions: SessionListResolver },
    runGuardsAndResolvers: 'always',
  },

  {
    path: 'events/session/new',
    component: SessionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'staff',
    component: StaffComponent,
  },

  { path: '', redirectTo: 'events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((x) => x.UserModule),
  },
  { path: '**', redirectTo: '/404' },
];
