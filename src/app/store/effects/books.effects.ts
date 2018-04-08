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

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BooksActionTypes.LoadBooks),
    mergeMap(() => this.bs.getAll().pipe(
      map(books => new booksActions.LoadBooksSuccess(books)),
      catchError(err => of(new booksActions.LoadBooksFail(err)))
    ))
  );

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
