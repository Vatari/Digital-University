import { sequence } from '@angular/animations';
import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../../shared';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
})
export class SessionListComponent implements OnChanges {
  @Input() sessions!: ISession[];
  @Input() filterBy!: string;
  @Input() sortBy!: string;
  visibleSessions: ISession[] = [];

  constructor() {}

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
    }
  }
  filterSessions(filtered: string) {
    if (filtered === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter((s) => {
        return s.level.toLocaleLowerCase() === filtered;
      });
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
