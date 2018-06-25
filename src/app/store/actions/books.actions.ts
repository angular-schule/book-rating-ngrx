import { Action } from '@ngrx/store';

import { Book } from '../../shared/book';

// TODO_3: define actions types
export enum BooksActionTypes {

}

// TODO_4: define action creator classes



/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type BooksActions =
  | LoadBooks
  | LoadBooksSuccess
  | LoadBooksFail;
