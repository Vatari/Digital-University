import { Component, OnInit } from '@angular/core';
import { EventService, ISession } from '../events';
import { AuthService } from '../user/auth.service';
import { TokenService } from '../user/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  searchText: string = '';

  foundSessions!: ISession[];

  constructor(
    public token: TokenService,
    private eventService: EventService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {}

  searchSessions(searchText: string) {
    /*   this.eventService.searchSessions(searchText).subscribe((sessions: any) => {
      this.foundSessions = sessions;
      console.log(sessions);
    }); */
  }
}
