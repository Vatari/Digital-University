import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, mergeMap, Observable, of, tap } from 'rxjs';
import { NotificationService } from 'src/app/common/toastr.service';
import { IEvent, ISession } from './interfaces/event-model';

const HOST = 'http://localhost:4000';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  //event!: IEvent;

  constructor(private http: HttpClient, private toastr: NotificationService) {}

  getEvent(id: string): Observable<IEvent> {
    return this.http.get<IEvent>(HOST + '/events/' + id);
  }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(HOST + '/events');
  }

  errorHandler(error: HttpErrorResponse) {
    return this.toastr.error('Няма такъв запис!');
  }

  saveEvent(event: IEvent) {
    return this.http.post<IEvent>(HOST + '/events/create/', event).subscribe({
      next: (data) => {
        this.toastr.success('Успешно създаване на курс');

        //this.tokenService.saveToken(data.accessToken);
      },
      error: (err) => {
        this.toastr.error(err.error.message);
      },
    });
  }

  sessionDelete(sessionId: string) {
    return this.http.delete(HOST + '/events/session/' + sessionId).subscribe({
      next: (data) => {
        this.toastr.success('Модула е изтрит успешно');
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
          this.toastr.success('Успешно създаване на модул');
        },
        error: (err) => {
          this.toastr.error(err.error.message);
        },
      });
  }

  searchEvents(query: string) {
    return this.http.get<IEvent[]>(HOST + `/events/search?search=${query}`);
  }

  loadSessions(id: string): Observable<ISession[]> {
    return this.http.get<ISession[]>(HOST + `/events/${id}/sessions`);
  }
}
