import { BookStoreService } from './../shared/book-store.service';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../_reducers/types';

@Injectable()
export class BooksActions {

  static LOAD_PENDING = 'LOAD_PENDING';
  static LOAD_COMPLETED = 'LOAD_COMPLETED';
  static BOOK_SELECTED = 'BOOK_SELECTED';

  constructor(private ngRedux: NgRedux<IAppState>, private bs: BookStoreService) {}

  loadBooks() {
    this.ngRedux.dispatch({ type: BooksActions.LOAD_PENDING });

    this.bs.getAll().subscribe(
      books => this.ngRedux.dispatch({
        type: BooksActions.LOAD_COMPLETED,
        payload: books
      })
    );
  }

  selectBook(isbn: number) {
    this.ngRedux.dispatch({
      type: BooksActions.BOOK_SELECTED,
      payload: isbn
    });
  }
}
