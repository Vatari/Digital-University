import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchedEvents!: IEvent[];
  query!: string;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.searchedEvents = this.router.snapshot.data['searchedEvents'];
    this.query = this.router.snapshot.queryParams['query'];
  }
}
