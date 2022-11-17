import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-well',
  templateUrl: './collapse-well.component.html',
  styleUrls: ['./collapse-well.component.css'],
})
export class CollapseWellComponent implements OnInit {
  @Input() title!: string;
  isVisible: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleContent() {
    this.isVisible = !this.isVisible;
  }
}
