import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { BookStoreService } from '../../shared/book-store.service';
import { BooksActionTypes } from '../actions/books.actions';
import * as booksActions from '../actions/books.actions';

/**
 * Effects offer a way to isolate and easily test side-effects within your application.
 */
@Injectable()
export class BooksEffects {

  /*
   * load book list and dispatch LoadBooksSuccess action
   */
  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BooksActionTypes.LoadBooks),
    mergeMap(() => this.bs.getAll().pipe(
      map(books => new booksActions.LoadBooksSuccess(books)),
      catchError(err => of(new booksActions.LoadBooksFail(err)))
    ))
  );

  /*
   * trigger LoadBook when SelectBook happens
   */
  @Effect()
  selectBook$ = this.actions$.pipe(
    ofType(BooksActionTypes.SelectBook),
    map((action: booksActions.SelectBook) => action.payload),
    map(isbn => new booksActions.LoadBook(isbn))
  );

  /*
   * load one book by ISBN and dispatch LoadBookSuccess action
   */
  @Effect()
  loadBook$ = this.actions$.pipe(
    ofType(BooksActionTypes.LoadBook),
    map((action: booksActions.LoadBook) => action.payload),
    mergeMap(isbn => this.bs.getSingle(isbn).pipe(
      map(book => new booksActions.LoadBookSuccess(book)),
      catchError(err => of(new booksActions.LoadBookFail(err)))
    ))
  );

  /*
   * do console log when LoadBooksSuccess happens
   */
  @Effect({ dispatch: false })
  loadBooksSuccess$ = this.actions$.pipe(
    ofType(BooksActionTypes.LoadBooksSuccess),
    tap(() => console.log('Bücher wurden geladen'))
  );

  constructor(
    private actions$: Actions,
    private bs: BookStoreService,
  ) { }
}
