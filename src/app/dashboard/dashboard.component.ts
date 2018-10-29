import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  books$ = this.service.getAll();
  loading$ = of(false); // TODO: Implement logic

  constructor(private service: BookStoreService) { }

  ngOnInit() {
  }

  doRateUp(book: Book) {
  }

  doRateDown(book: Book) {
  }
}
