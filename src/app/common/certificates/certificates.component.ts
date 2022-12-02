import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
})
export class CertificatesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  back() {
    this.router.navigate(['/events']);
  }
}
