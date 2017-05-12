import { Action } from 'redux';
import * as si from 'seamless-immutable';

import { Book } from './../shared/book';
import { BooksActions } from '../_actions/books.action';
import { BooksState } from './types';
import { IActionPayload } from '../_actions/actionPayload';

const INITIAL_BOOKS_STATE: BooksState = si.from({
  books: [],
  isLoading: false,
  selected: new Book(null, null, null)
});


export function booksReducer(
  state: BooksState = INITIAL_BOOKS_STATE,
  action: IActionPayload<BooksState>
): BooksState {
  switch (action.type) {

    case BooksActions.LOAD_PENDING:
      return state.set('isLoading', true);

    case BooksActions.LOAD_COMPLETED:
      return state
              .set('isLoading', false)
              .set('books', action.payload);

    case BooksActions.BOOK_SELECTED:
      const foundBook = state.books.find(b => b.isbn === action.payload);
      return foundBook ? state.set('selected', foundBook) : state;

    default: return state;
  }
}
