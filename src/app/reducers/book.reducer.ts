import { Action } from '@ngrx/store';
import { Book } from '../shared/book';
import { BookActionTypes, BookActions } from '../actions/book.actions';
import { HttpErrorResponse } from '@angular/common/http';

export interface State {
  books: Book[];
  loading: boolean;
  error: HttpErrorResponse;
  selectedBook: Book;
}

export const initialState: State = {
  books: [],
  loading: false,
  error: null,
  selectedBook: null
};

export function reducer(state = initialState, action: BookActions): State {
  switch (action.type) {

    case BookActionTypes.LoadBooks: {
      return {
        ...state,
        loading: true
      };
    }

    case BookActionTypes.LoadBooksSuccess: {
      const books = action.payload;

      return {
        ...state,
        loading: false,
        books,
        error: null // NEW
      };
    }

    case BookActionTypes.LoadBooksFail: {
      const error = action.payload;

      return {
        ...state,
        loading: false,
        error
      };
    }

    case BookActionTypes.LoadSingleBook: {
      return {
        ...state,
        selectedBook: null
      };
    }

    case BookActionTypes.LoadSingleBookSuccess: {
      const selectedBook = action.payload;
      return {
        ...state,
        selectedBook
      };
    }

    default:
      return state;
  }
}
