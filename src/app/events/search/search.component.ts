import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchedEvents!: IEvent[];
  @Input() query!: string;

  @Input() form!: NgForm;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.queryParams.subscribe((data) => {
      this.query = data['query'];

      this.searchedEvents = this.router.snapshot.data['searchedEvents'];
      this.query = this.router.snapshot.queryParams['query'];
    });
  }
}
