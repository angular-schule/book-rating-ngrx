import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadBooksSuccess, BookActionTypes } from '../actions/book.actions';
import { BookStoreService } from '../shared/book-store.service';
import { switchMap, map } from 'rxjs/operators';


@Injectable()
export class BookEffects {

  constructor(private actions$: Actions, private bookStore: BookStoreService) {}

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBooks),
    switchMap(() => this.bookStore.getAll()),
    map(books => new LoadBooksSuccess(books))
  );
}
