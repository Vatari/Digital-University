import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent, ISession } from '../shared/index';
import { EventService } from '../shared/event.service';
import { TokenService } from 'src/app/user/token.service';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  id!: string;
  event!: IEvent;
  addMode: boolean = false;
  filterBy: string = 'all';
  sortBy: string = 'name';
  sessions!: ISession[];

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    public token: TokenService,
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.event = this.route.snapshot.data['event'];
    this.id = this.route.snapshot.params['id'];
    this.sessions = this.route.snapshot.data['sessions'];
    this.addMode = false;
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    session._id = this.id;
    session.owner = this.auth.currentUser._id;
    this.sessions.push(session);
    this.eventService.createSession(session);
    this.reloadCurrentRoute();
    this.addMode = false;
  }

  cancelCreateSession() {
    this.addMode = false;
  }
}
