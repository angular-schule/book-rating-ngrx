import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  books$: Observable<Book[]>;
  loading$: Observable<boolean>;

  constructor(private bookStore: BookStoreService) { }

  ngOnInit() {
    this.books$ = this.bookStore.getAll();
  }

  doRateUp(book: Book) {
  }

  doRateDown(book: Book) {
  }
}
