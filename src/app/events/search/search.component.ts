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

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.searchedEvents = this.router.snapshot.data['searchedEvents'];

    this.router.data.subscribe((data) => {
      data
      // is now triggered at each queryParams change
    });
  }
}
