import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

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
import { FooterComponent } from './common/footer/footer.component';
import { StaffComponent } from './common/staff/staff.component';
import { CertificatesComponent } from './common/certificates/certificates.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { SpinnerInterceptorProviders } from './common/spinner.interceptor';

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
    FooterComponent,
    StaffComponent,
    CertificatesComponent,
    SpinnerComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [
    { provide: 'canDeactivateCreateEvent', useValue: checkState },
    authInterceptorProviders, SpinnerInterceptorProviders
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
