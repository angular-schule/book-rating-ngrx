import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as reducers from '../_reducers';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  books$: Observable<Book[]>;
  booksIsLoading$: Observable<boolean>;

  constructor(private store: Store<reducers.State>) {
    this.books$ = store.select(reducers.getBooks);
    this.booksIsLoading$ = store.select(reducers.getBooksIsLoading);
  }

  addBookToList(book: Book) {
    // TODO: more actions!
    // this.books.push(book);
  }
}
