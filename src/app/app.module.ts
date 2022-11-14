import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [{ provide: 'canDeactivateCreateEvent', useValue: checkState }],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function checkState(component: CreateEventComponent) {
  if (component.isNotSaved) {
    return window.confirm(
      'You have not saved this event, do you really want to leave this page?'
    );
  }
  return true;
}
