import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService, ISession } from '../events';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  searchText: string = '';

  foundSessions!: ISession[];

  constructor(public auth: AuthService, private eventService: EventService) {}

  ngOnInit(): void {}

  searchSessions(searchText: string) {
  /*   this.eventService.searchSessions(searchText).subscribe((sessions: any) => {
      this.foundSessions = sessions;
      console.log(sessions);
    }); */
  }
}
