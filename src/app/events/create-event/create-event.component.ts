import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/user/token.service';
import { EventService } from '../shared/index';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  newEvent: any;
  isNotSaved: boolean = true;
  isLogged: boolean = false;
  constructor(
    private router: Router,
    private eventService: EventService,
    private token: TokenService
  ) {}

  ngOnInit(): void {}

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues);
    this.isNotSaved = false;

    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
