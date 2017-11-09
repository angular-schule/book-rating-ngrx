import { BookStoreService } from './../shared/book-store.service';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as booksActions from '../_actions/books.actions';

/**
 * Effects offer a way to isolate and easily test side-effects within your application.
 */
@Injectable()
export class BooksEffectsService {

  @Effect()
  select$: Observable<Action> = this.actions$
    .ofType<booksActions.LoadPending>(booksActions.LOAD_PENDING)
    .switchMap(() => this.bookStore
      .getAll()
      .map(books => new booksActions.LoadCompleted(books))
    );

  constructor(
    private actions$: Actions,
    private bookStore: BookStoreService,
  ) { }
}
