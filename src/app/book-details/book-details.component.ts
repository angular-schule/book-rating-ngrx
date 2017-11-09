import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as booksActions from '../_actions/books.actions';
import * as reducers from '../_reducers';

import { Book } from '../shared/book';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private store: Store<reducers.State>) {

    this.book$ = store.select(reducers.getBookSelected);

    const isbn = this.route.snapshot.params.isbn;
    this.store.dispatch(new booksActions.BookSelected(isbn));
  }
}
