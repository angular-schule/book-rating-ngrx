import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { createSelector, createFeatureSelector } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { RouterStateUrl } from '../../shared/utils';
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
  routerReducer: RouterReducerState<RouterStateUrl>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  books: booksReducer,
  routerReducer: routerReducer,
};

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];

