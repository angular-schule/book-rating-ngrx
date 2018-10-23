import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { LoadBooks } from '../actions/book.actions';
import { getBooksLoading } from '../selectors/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  books$: Observable<Book[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<State>, private bookStore: BookStoreService) { }

  ngOnInit() {
    this.books$ = this.bookStore.getAll();
    this.loading$ = this.store.pipe(select(getBooksLoading));

    this.store.dispatch(new LoadBooks());
  }

  doRateUp(book: Book) {
  }

  doRateDown(book: Book) {
  }
}
