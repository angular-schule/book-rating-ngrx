import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Book } from '../shared/book';

export enum BookActionTypes {
  LoadBooks = '[Book] Load Books',
  LoadBooksSuccess = '[Book] Load Books success',
  LoadBooksFail = '[Book] Load Books fail',
  LoadSingleBook = '[Book] Load single book',
  LoadSingleBookSuccess = '[Book] Load single book success'
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

export class LoadSingleBook implements Action {
  readonly type = BookActionTypes.LoadSingleBook;
  constructor(public payload: string) {}
}

export class LoadSingleBookSuccess implements Action {
  readonly type = BookActionTypes.LoadSingleBookSuccess;
  constructor(public payload: Book) {}
}

export type BookActions = LoadBooks | LoadBooksSuccess | LoadBooksFail | LoadSingleBook | LoadSingleBookSuccess;
