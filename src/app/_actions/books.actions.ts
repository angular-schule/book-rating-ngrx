import { Action } from '@ngrx/store';
import { Book } from '../shared/book';

export const LOAD_PENDING = '[Books] Load Pending';
export const LOAD_COMPLETED = '[Books] Load Completed';
export const BOOK_SELECTED = '[Books] Selected';

export class LoadPending implements Action {
  readonly type = LOAD_PENDING;
}

export class LoadCompleted implements Action {
  readonly type = LOAD_COMPLETED;
  constructor(public payload: Book[]) {}
}

export class BookSelected implements Action {
  readonly type = BOOK_SELECTED;
  constructor(public payload: string /* isbn*/) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = LoadPending | LoadCompleted | BookSelected;
