import { Action } from '@ngrx/store';

import { Book } from '../../shared/book';

export enum BooksActionTypes {
  LoadBooks = '[Books] Load books',
  LoadBooksSuccess = '[Books] Load books success',
  LoadBooksFail = '[Books] Load books fail',
  SelectBook = '[Books] Select book'
}

export class LoadBooks implements Action {
  readonly type = BooksActionTypes.LoadBooks;
}

export class LoadBooksSuccess implements Action {
  readonly type = BooksActionTypes.LoadBooksSuccess;
  constructor(public payload: Book[]) {}
}

export class LoadBooksFail implements Action {
  readonly type = BooksActionTypes.LoadBooksFail;
  constructor(public payload: any) {}
}

export class SelectBook implements Action {
  readonly type = BooksActionTypes.SelectBook;
  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type BooksActions =
  | LoadBooks
  | LoadBooksSuccess
  | LoadBooksFail
  | SelectBook;
