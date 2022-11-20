import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/common/toastr.service';
import { IEvent, ISession } from './interfaces/event-model';

const HOST = 'http://localhost:4000';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  //event!: IEvent;

  constructor(private http: HttpClient, private toastr: NotificationService) {}

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(HOST + '/events');
  }
  getEvent(id: string): Observable<IEvent> {
    return this.http.get<IEvent>(HOST + '/events/' + id);
  }

  saveEvent(event: IEvent) {
    return this.http.post<IEvent>(HOST + '/events/create/', event).subscribe({
      next: (data) => {
        this.toastr.success('Success');
        console.log(data);

        //this.tokenService.saveToken(data.accessToken);
      },
      error: (err) => {
        this.toastr.error(err.error.message);
      },
    });
  }

  createSession(session: ISession) {
    return this.http
      .post<ISession>(HOST + '/events/create/session', session)
      .subscribe({
        next: (data) => {
          this.toastr.success('Success');
        },
        error: (err) => {
          this.toastr.error(err.error.message);
        },
      });
  }

  loadSessions(id: string): Observable<ISession[]> {
    return this.http.get<ISession[]>(HOST + `/events/${id}/sessions`);
  }

  updateEvent(event: IEvent) {
    return this.http
      .post<IEvent>(HOST + '/create/session', event.sessions)
      .subscribe({
        next: (data) => {
          this.toastr.success('Success');
        },
        error: (err) => {
          this.toastr.error(err.error.message);
        },
      });
  }
}
