import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  @Input() count!: number;
  @Input() liked!: boolean;
  @Output() like = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onLike() {
    this.like.emit({});
  }
}
