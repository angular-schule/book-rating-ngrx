import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { getAllBooks, getBooksLoading } from '../store/selectors/books.selectors';
import { State } from '../store/reducers';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  books$: Observable<Book[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.books$ = store.pipe(select(getAllBooks));
    this.loading$ = store.pipe(select(getBooksLoading));
  }

  addBookToList(book: Book) {
    // TODO: more actions!
    // this.books.push(book);
  }
}
