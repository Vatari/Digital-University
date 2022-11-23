import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  @Input() count!: number;

  @Input() set liked(value: any) {
    this.iconColor = value ? 'red' : 'white';
  }
  @Output() like = new EventEmitter();
  iconColor!: string

  constructor() {}

  ngOnInit(): void {}
  onLike() {
    this.like.emit({});
  }
}
