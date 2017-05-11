import { Action } from 'redux';
import * as si from 'seamless-immutable';

import { Book } from './../shared/book';
import { BooksActions } from '../_actions/books.action';
import { Books } from './types';
import { IActionPayload } from '../_actions/actionPayload';

const INITIAL_BOOKS_STATE: Books = si.from({
  books: [],
  selected: new Book(null, null, null)
});


export function booksReducer(
  state: Books = INITIAL_BOOKS_STATE,
  action: IActionPayload<Books>
): Books {
  switch(action.type) {
    case BooksActions.LOAD_PENDING:
      return state; // TODO: Metadata

    case BooksActions.LOAD_COMPLETED:
      return state.set('books', action.payload);

      case BooksActions.BOOK_SELECTED:
        let book = state.books.find(b => b.isbn === action.payload);
        return book ? state.set('selected', book) : state;

    default: return state;

  }
}
