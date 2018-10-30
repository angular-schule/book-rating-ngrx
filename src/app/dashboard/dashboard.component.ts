import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

import { Book } from '../shared/book';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { LoadBooks, LoadBooksSuccess, LoadBooksFail } from '../actions/book.actions';
import { getBooksLoading, getAllBooks, getBooksError } from '../reducers/book.selectors';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  books$ = this.store.pipe(select(getAllBooks));
  loading$ = this.store.pipe(select(getBooksLoading));
  error$ = this.store.pipe(select(getBooksError));

  constructor(private store: Store<State>, private bs: BookStoreService) { }

  ngOnInit() {
    this.store.dispatch(new LoadBooks());
  }

  doRateUp(book: Book) {
    this.bs.setRating(book.isbn, book.rating + 1).subscribe();
  }

  doRateDown(book: Book) {
    this.bs.setRating(book.isbn, book.rating - 1).subscribe();
  }
}
