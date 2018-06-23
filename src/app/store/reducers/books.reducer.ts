import { Book } from '../../shared/book';
import { BooksActions, BooksActionTypes } from '../actions/books.actions';

export interface BooksState {
  books: Book[];
  loading: boolean;
  selectedIsbn: string;
}

const initialState: BooksState = {
  books: [],
  loading: false,
  selectedIsbn: null
};

export function booksReducer(state: BooksState = initialState, action: BooksActions): BooksState {
  switch (action.type) {

    case BooksActionTypes.LoadBooks:
    case BooksActionTypes.LoadBook: {
      return { ...state, loading: true };
    }

    case BooksActionTypes.LoadBooksFail:
    case BooksActionTypes.LoadBookFail: {
      return { ...state, loading: false };
    }

    case BooksActionTypes.LoadBooksSuccess: {
      const books = sortBooks(action.payload);

      return { ...state, books, loading: false };
    }

    

    case BooksActionTypes.LoadBookSuccess: {
      const book = action.payload;

      const cleanedList = state.books.filter(b => b.isbn !== state.selectedIsbn);
      const books = [...cleanedList, book];
      const sortedBooks = sortBooks(books);

      return {
        ...state,
        books: sortedBooks,
        loading: false
      };
    }

    case BooksActionTypes.SelectBook: {
      const selectedIsbn = action.payload;
      return { ...state, selectedIsbn };
    }


    case BooksActionTypes.AddBookSuccess: {
      const newBook = action.payload;
      const books = [...state.books, newBook];

      return { ...state, books };
    }


    default: {
      return state;
    }
  }
}

function sortBooks(books: Book[]) {
  return [...books].sort((a, b) => b.rating - a.rating);
}
