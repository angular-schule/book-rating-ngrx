import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromBook from './book.reducer';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

export interface State {

  book: fromBook.State;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  book: fromBook.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
