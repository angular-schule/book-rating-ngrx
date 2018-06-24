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

export const minRating = 1;
export const maxRating = 5;

export function booksReducer(state: BooksState = initialState, action: BooksActions): BooksState {
  switch (action.type) {

    case BooksActionTypes.LoadBooks:
    case BooksActionTypes.LoadBook:
    case BooksActionTypes.AddBook: {
      return { ...state, loading: true };
    }

    case BooksActionTypes.LoadBooksFail:
    case BooksActionTypes.LoadBookFail:
    case BooksActionTypes.AddBookFail: {
      return { ...state, loading: false };
    }

    case BooksActionTypes.LoadBooksSuccess: {
      const books = action.payload;

      return { ...state, books, loading: false };
    }

    case BooksActionTypes.LoadBookSuccess: {
      const book = action.payload;
      const books = replaceInList(state.books, book);

      return {
        ...state,
        books,
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

      return { ...state, loading: false, books };
    }

    case BooksActionTypes.RateUp:
    case BooksActionTypes.RateDown: {

      const book = action.payload;
      const ratedBook = rateBook(book, action.type);
      const books = replaceInList(state.books, ratedBook);

      return { ...state, books };
    }

    default: {
      return state;
    }
  }
}

// replaces book in the array and also sorts the list afterwards
function replaceInList(books: Book[], book: Book) {
  return books
    .map(b => b.isbn === book.isbn ? book : b)
    .sort((a, b) => b.rating - a.rating);
}

// creates a shallow copy of the book and changes the rating by +-1
function rateBook(book: Book, type: BooksActionTypes.RateUp | BooksActionTypes.RateDown) {
  return  {
    ...book,
    rating: type === BooksActionTypes.RateUp ?
      Math.min(maxRating, book.rating + 1) :
      Math.max(minRating, book.rating - 1)
  };
}
