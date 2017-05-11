import * as si from 'seamless-immutable';
import { Book } from '../shared/book';

export interface IAppState {
  counter?: Counter;
  books?: Books
  // TODO: mehr reducer, mehr actions
};

export type Counter = si.Immutable<{
  current: number;
}>;

export type Books = si.Immutable<{
  books: Book[],
  selected: Book
}>;
