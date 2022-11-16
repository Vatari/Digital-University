import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  newEvent: any;
  isNotSaved: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  saveEvent(formValues: any) {
    console.log(formValues);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
