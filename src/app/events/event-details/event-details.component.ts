import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/index';
import { EventService } from '../shared/event.service';
import { TokenService } from 'src/app/user/token.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event!: IEvent;
  addMode: boolean = false;
  filterBy: string = 'all';
  sortBy: string = 'name';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    public token: TokenService
  ) {}

  ngOnInit() {
    //this.route.params.forEach((params: Params) => {
    this.event = this.route.snapshot.data['event'];
    this.addMode = false;
    //    });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    this.event.sessions.map((s) => s.id);

    // this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
  cancelCreateSession() {
    this.addMode = false;
  }
}
