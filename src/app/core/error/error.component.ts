import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent implements OnInit {
  public message!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const messageParam = 'message';
    this.message = this.route.snapshot.queryParams[messageParam];
  }
}
