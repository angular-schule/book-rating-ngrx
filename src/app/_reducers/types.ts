import * as si from 'seamless-immutable';
import { Book } from '../shared/book';

export interface IAppState {
  counterState?: CounterState;
  booksState?: BooksState;
  // TODO: mehr reducer, mehr actions
};

export type CounterState = si.Immutable<{
  current: number;
}>;

export type BooksState = si.Immutable<{
  books: Book[],
  isLoading: boolean,
  selected: Book
}>;
