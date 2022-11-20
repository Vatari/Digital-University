import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/index';
import { EventService } from '../shared/event.service';
import { TokenService } from 'src/app/user/token.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  id!: any;
  event!: IEvent;
  addMode: boolean = false;
  filterBy: string = 'all';
  sortBy: string = 'name';
  sessions!: ISession[]

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    public token: TokenService
  ) {}

  ngOnInit() {
    this.event = this.route.snapshot.data['event'];
    this.id = this.route.snapshot.params['id'];
    this.sessions = this.route.snapshot.data['sessions'];
    this.addMode = false;
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    session._id = this.id;

    this.eventService.createSession(session);

    this.addMode = false;
  }
  cancelCreateSession() {
    this.addMode = false;
  }
}
