import { Injectable } from '@angular/core';
import { ISession } from '../shared';

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  constructor() {}

  deleteUserLike(session: ISession, user: string) {
    session.voters = session.voters.filter((voter) => voter !== user);
  }

  addUserLike(session: ISession, user: string) {
    session.voters.push(user);
  }

  userHasLiked(session: ISession, user: string) {
    return session.voters.some((voter) => voter === user);
  }
}
