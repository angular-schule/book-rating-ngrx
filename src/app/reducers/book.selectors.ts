import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State as BookState } from './book.reducer';

export const getBooksState = createFeatureSelector<BookState>('book');

export const getBooksLoading = createSelector(
    getBooksState,
    state => state.loading
);

export const getAllBooks = createSelector(
    getBooksState,
    state => state.books
);

export const getBooksError = createSelector(
    getBooksState,
    state => state.error
);

export const getSelectedBook = createSelector(
    getBooksState,
    state => state.selectedBook
);
