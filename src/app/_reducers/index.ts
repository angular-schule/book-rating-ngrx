import * as fromRouter from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { createSelector, createFeatureSelector } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { RouterStateUrl } from '../shared/utils';
import { BooksState, booksReducer } from './books.reducer';
import { CounterState, counterReducer } from './counter.reducer';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 * see https://github.com/brandonroberts/ngrx-store-freeze
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * We treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  counter: CounterState;
  books: BooksState;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  books: booksReducer,
  routerReducer: fromRouter.routerReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {

    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];


/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
*/
export const getCounterState = createFeatureSelector<CounterState>('counter');
export const getBooksState = createFeatureSelector<BooksState>('books');

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state.
 */
export const getCurrent        = createSelector(getCounterState, (state) => state.current);
export const getBooks          = createSelector(getBooksState, (state) => state.books);
export const getBooksIsLoading = createSelector(getBooksState, (state) => state.isLoading);
export const getBookSelected   = createSelector(getBooksState, (state) => state.selected);
