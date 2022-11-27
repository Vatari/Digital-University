import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService, ISession } from '../events';
import { AuthService } from '../user/auth.service';
import { TokenService } from '../user/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  query: string = '';

  foundSessions!: ISession[];

  constructor(
    public token: TokenService,
    private eventService: EventService,
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  search(query: string) {
    if (query !== '') {
      this.router.navigate(['/events/search'], { queryParams: { query } });
    }
    return;
  }
}
