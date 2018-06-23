import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '../shared/book';
import { State } from '../store/reducers';
import { LoadBooks, RateUp, RateDown } from '../store/actions/books.actions';
import { getAllBooks, getBooksLoading, rateDownAllowed, rateUpAllowed } from '../store/selectors/books.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  rateUpAllowed$: Observable<(isbn: string) => boolean>;
  rateDownAllowed$: Observable<(isbn: string) => boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.books$ = this.store.pipe(select(getAllBooks));
    this.loading$ = this.store.pipe(select(getBooksLoading));
    this.rateUpAllowed$ = this.store.pipe(select(rateUpAllowed));
    this.rateDownAllowed$ = this.store.pipe(select(rateDownAllowed));

    // trigger initial book list loading
    this.store.dispatch(new LoadBooks());
  }

  doRateUp(book: Book) {
    this.store.dispatch(new RateUp(book));
  }

  doRateDown(book: Book) {
    this.store.dispatch(new RateDown(book));
  }

  addBookToList(book: Book) {
    // TODO: more actions!
  }
}
