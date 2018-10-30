import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State as BookState } from './book.reducer';

export const getBookState = createFeatureSelector<BookState>('book');

export const getBooksLoading = createSelector(
    getBookState,
    state => state.loading
);

export const getAllBooks = createSelector(
    getBookState,
    state => state.books
);

export const getBooksError = createSelector(
    getBookState,
    state => state.error
);

export const getSelectedBook = createSelector(
    getBookState,
    state => state.selectedBook
);
