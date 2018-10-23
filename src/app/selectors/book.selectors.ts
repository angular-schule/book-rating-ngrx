import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State as BookState } from '../reducers/book.reducer';

export const getBooksState = createFeatureSelector<BookState>('book');

export const getBooksLoading = createSelector(
  getBooksState,
  state => state.loading
);

export const getAllBooks = createSelector(
  getBooksState,
  state => state.books
);
