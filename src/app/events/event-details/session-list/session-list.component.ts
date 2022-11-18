import { sequence } from '@angular/animations';
import { Component, Input, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
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

  constructor(private auth: AuthService) {}

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  toggleLike(session: ISession) {
    if (this.userHasLiked(session)) {
      this.likeService.deleteUserLike(session, this.auth.currentUser.userName);
    } else {
      this.likeService.addUserLike(session, this.auth.currentUser.userName);
    }
    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }

    userHasLiked(session: ISession) {
      return this.likeService.userHasLiked(session, this.auth.currentUser.userName)
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
