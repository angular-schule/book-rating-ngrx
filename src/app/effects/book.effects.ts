import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BookStoreService } from '../shared/book-store.service';
import { BookActionTypes, LoadBooksSuccess, LoadBooksFail, LoadSingleBook, LoadSingleBookSuccess } from '../actions/book.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class BookEffects {

  constructor(private actions$: Actions, private service: BookStoreService) {}

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBooks),
    switchMap(() => this.service.getAll().pipe(
      map(books => new LoadBooksSuccess(books)),
      catchError(err => of(new LoadBooksFail(err)))
    ))
  );

  @Effect()
  loadSingleBook$ = this.actions$.pipe(
    ofType<LoadSingleBook>(BookActionTypes.LoadSingleBook),
    map(action => action.payload),
    switchMap(isbn => this.service.getSingle(isbn).pipe(
      map(book => new LoadSingleBookSuccess(book))
    ))
  );
}
