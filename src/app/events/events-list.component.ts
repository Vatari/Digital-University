import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../common/toastr.service';
import { IEvent } from './shared/index';
import { EventService } from './shared/event.service';

@Component({
  templateUrl: './event-list.component.html',
})
export class EventsListComponent implements OnInit {
  events!: IEvent[];

  constructor(
    private eventService: EventService,
    private toastr: NotificationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
 
}
