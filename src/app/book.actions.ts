import { Action } from '@ngrx/store';

export enum BookActionTypes {
  LoadBooks = '[Book] Load Books'
}

export class LoadBooks implements Action {
  readonly type = BookActionTypes.LoadBooks;
}

export type BookActions = LoadBooks;
