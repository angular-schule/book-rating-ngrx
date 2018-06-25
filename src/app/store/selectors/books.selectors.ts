import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BooksState } from '../reducers/books.reducer';

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
*/
export const getBooksState = createFeatureSelector<BooksState>('books');


/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state.
 */
// TODO_7: selector for books.loading

// TODO_8: selector for books.books



