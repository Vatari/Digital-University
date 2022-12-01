import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  DurationPipe,
  LocationValidator,
} from './events/index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionComponent } from './events/session/session.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapseWellComponent } from './common/collapse-well/collapse-well.component';
import { LikeComponent } from './events/event-details/like/like.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './auth-interceptor';
import { SearchComponent } from './events/search/search.component';
import { ContactsComponent } from './common/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    LikeComponent,
    SessionComponent,
    SessionListComponent,
    CollapseWellComponent,
    DurationPipe,
    LocationValidator,
    SearchComponent,
    ContactsComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    { provide: 'canDeactivateCreateEvent', useValue: checkState },
    authInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function checkState(component: CreateEventComponent) {
  if (component.isNotSaved) {
    return window.confirm(
      'Може да изгубите направените промени. Желаете ли да напуснете тази страницa?'
    );
  }
  return true;
}
