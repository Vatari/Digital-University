import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ISession } from '../events';
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
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  reset(form: NgForm) {
    form.reset();
  }
}
