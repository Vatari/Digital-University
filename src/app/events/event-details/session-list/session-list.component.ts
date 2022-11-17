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
  visibleSessions: ISession[] = [];

  constructor() {}

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
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
