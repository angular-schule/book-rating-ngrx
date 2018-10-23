import { Action } from '@ngrx/store';
import { Book } from '../shared/book';
import { BookActionTypes, BookActions } from '../actions/book.actions';


export interface State {
  books: Book[];
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false
};

export function reducer(state = initialState, action: BookActions): State {
  switch (action.type) {

    case BookActionTypes.LoadBooks: {
      return { ...state, loading: true }; // returns a new state
    }

    case BookActionTypes.LoadBooksSuccess: {
      const books = action.payload;

      return { ...state, books, loading: false };
    }

    default:
      return state;
  }
}
