import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-well',
  templateUrl: './collapse-well.component.html',
  styleUrls: ['./collapse-well.component.css'],
})
export class CollapseWellComponent implements OnInit {
  isVisible: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleContent() {
    this.isVisible = !this.isVisible;
  }
}
