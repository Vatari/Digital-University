import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService, IEvent } from '../shared';
import { SearchResolver } from './search.resolver';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchedEvents!: IEvent[];

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.searchedEvents = this.router.snapshot.data['searchedEvents'];
  }
}
