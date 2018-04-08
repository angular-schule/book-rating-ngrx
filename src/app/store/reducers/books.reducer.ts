import { Book } from '../../shared/book';
import { BooksActions, BooksActionTypes } from '../actions/books.actions';

export interface BooksState {
  books: Book[];
  loading: boolean;
  selected: Book;
}

const initialState: BooksState = {
  books: [],
  loading: false,
  selected: new Book(null, null, null)
};

export function booksReducer(state: BooksState = initialState, action: BooksActions): BooksState {
  switch (action.type) {

    case BooksActionTypes.LoadBooks:
      return {
        ...state,
        loading: true
      };

    case BooksActionTypes.LoadBooksSuccess: {
      const books = action.payload;

      return {
        ...state,
        books,
        loading: false
      };
    }

    case BooksActionTypes.LoadBooksFail: {
      return {
        ...state,
        loading: false
      };
    }

    case BooksActionTypes.SelectBook: {
      const selectedIsbn = action.payload;
      const foundBook = state.books.find(b => b.isbn === selectedIsbn);

      if (foundBook) {
        return { ...state, selected: foundBook };
      } else {
        return state;
      }
    }

    default: {
      return state;
    }
  }
}
