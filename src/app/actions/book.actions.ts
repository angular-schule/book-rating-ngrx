import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Book } from '../shared/book';

export enum BookActionTypes {
  LoadBooks =        '[Book] Load Books',
  LoadBooksSuccess = '[Book] Load Books success',
  LoadBooksFail =    '[Book] Load Books fail',
}

export class LoadBooks implements Action {
  readonly type = BookActionTypes.LoadBooks;
}

export class LoadBooksSuccess implements Action {
  readonly type = BookActionTypes.LoadBooksSuccess;
  constructor(public payload: Book[]) {}
}

export class LoadBooksFail implements Action {
  readonly type = BookActionTypes.LoadBooksFail;
  constructor(public payload: HttpErrorResponse) {}
}

export type BookActions =
  | LoadBooks
  | LoadBooksSuccess
  | LoadBooksFail;
