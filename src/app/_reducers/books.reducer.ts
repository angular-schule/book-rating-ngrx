import * as booksActions from '../_actions/books.actions';
import { Book } from '../shared/book';

export interface BooksState {
  books: Book[];
  isLoading: boolean;
  selected: Book;
}

const INITIAL_BOOKS_STATE: BooksState = {
  books: [],
  isLoading: false,
  selected: new Book(null, null, null)
};

export function booksReducer(state: BooksState = INITIAL_BOOKS_STATE,
  action: booksActions.Actions
): BooksState {
  switch (action.type) {

    case booksActions.LOAD_PENDING:
      return {
        ...state,
        isLoading: true
      };

    case booksActions.LOAD_COMPLETED:
      return {
        ...state,
        books: action.payload,
        isLoading: false
      };

    case booksActions.BOOK_SELECTED:
      const foundBook = state.books.find(b => b.isbn === action.payload);
      return foundBook ? { ...state, selected: foundBook } : state;

    default: {
      return state;
    }
  }
}
