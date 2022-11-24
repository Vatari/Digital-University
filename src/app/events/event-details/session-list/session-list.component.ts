import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/common/toastr.service';
import { AuthService } from 'src/app/user/auth.service';
import { TokenService } from 'src/app/user/token.service';
import { EventService, ISession } from '../../shared';
import { LikeService } from '../like.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
})
export class SessionListComponent implements OnChanges, OnInit {
  @Input() sessions!: ISession[];
  @Input() filterBy!: string;
  @Input() sortBy!: string;

  visibleSessions: ISession[] = [];
  isLiked!: boolean;
  isOwner!: boolean;

  constructor(
    public auth: AuthService,
    private likeService: LikeService,
    public token: TokenService,
    private toastr: NotificationService,
    private eventService: EventService
  ) {}

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
    }
  }
  ngOnInit() {
    if (
      this.sessions.some((s) => s.owner.includes(this.auth.currentUser._id))
    ) {
      this.isOwner = true;
    }
  }
  deleteSession(session: ISession) {
    this.eventService.sessionDelete(session._id);
    let index = this.visibleSessions.indexOf(session);
    this.visibleSessions.splice(index, 1);
  }

  toggleLike(session: ISession) {
    if (!session.voters.includes(this.auth.currentUser._id)) {
      session.voters.push(this.auth.currentUser._id);
      this.likeService.addUserLike(session._id);
    } else {
      this.toastr.warning('Вече сте харесали този модул');
    }

    //this.sessions.map((s) => s.voters.push(this.auth.currentUser._id));

    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }
  userHasLiked(session: ISession) {
    return session.voters.includes(this.auth.currentUser._id);
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
