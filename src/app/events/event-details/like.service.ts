import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/common/toastr.service';

const HOST = 'http://localhost:4000';

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  constructor(private http: HttpClient, private toastr: NotificationService) {}

  addUserLike(id: string) {
    return this.http.get(HOST + '/events/session/like/' + id).subscribe({
      next: (data) => {},
      error: (err) => {
        this.toastr.error(err.error.message);
      },
    });
  }
}
