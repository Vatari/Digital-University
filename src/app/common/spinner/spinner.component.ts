import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  loading = this.loader.loading;
  constructor(public loader: LoaderService) {}

  ngOnInit(): void {}
}
