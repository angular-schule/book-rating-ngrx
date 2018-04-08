import { Action } from '@ngrx/store';

import { Book } from '../../shared/book';

export enum BooksActionTypes {
  LoadBooks = '[Books] Load all books',
  LoadBooksSuccess = '[Books] Load all books success',
  LoadBooksFail = '[Books] Load all books fail',
  LoadBook = '[Books] Load book',
  LoadBookSuccess = '[Books] Load book success',
  LoadBookFail = '[Books] Load book fail',
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

export class LoadBook implements Action {
  readonly type = BooksActionTypes.LoadBook;
  constructor(public payload: string) {}
}

export class LoadBookSuccess implements Action {
  readonly type = BooksActionTypes.LoadBookSuccess;
  constructor(public payload: Book) {}
}

export class LoadBookFail implements Action {
  readonly type = BooksActionTypes.LoadBookFail;
  constructor(public payload: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type BooksActions =
  | LoadBooks
  | LoadBooksSuccess
  | LoadBooksFail
  | LoadBook
  | LoadBookSuccess
  | LoadBookFail
  | SelectBook;
