import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../common/toastr.service';
import { EventService } from './shared/event.service';

@Component({
  templateUrl: './event-list.component.html',
})
export class EventsListComponent implements OnInit {
  events!: any[];

  constructor(
    private eventService: EventService,
    private toastr: NotificationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
  thumbnailHandler(eventName: any) {
    this.toastr.success(eventName);
  }
}
