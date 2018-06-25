import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../store/reducers';
// import { getSelectedBook } from '../store/selectors/books.selectors';
// import { SelectBook } from '../store/actions/books.actions';

import { Book } from '../shared/book';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private store: Store<State>) {

    // this.book$ = store.pipe(select(getSelectedBook));

    // const isbn = this.route.snapshot.params.isbn;
    // this.store.dispatch(new SelectBook(isbn));
  }
}
