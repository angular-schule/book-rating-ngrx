import * as si from 'seamless-immutable';

import { BooksActions } from './../_actions/books.action';
import { booksReducer } from './books.reducer';
import { BooksState } from './types';
import { Book } from 'app/shared/book';

describe('Quotes Reducer', () => {
  let initState: BooksState;
  let nextState: BooksState;

  beforeEach(() => {
    initState = booksReducer(undefined, { type: 'TEST_INIT' });
    nextState = undefined;
  });

  afterEach(() => {
    expect(si.isImmutable(nextState)).toBe(true);
  });

  it('should have an immutable initial state', () => {
    nextState = initState;
  });

  it('should set isLoading on API call start (LOAD_PENDING)', () => {

    nextState = booksReducer(initState, { type: BooksActions.LOAD_PENDING });

    expect(nextState.isLoading).toBe(true);
  });

  it('should update `isLoading` and `books` on API response (LOAD_COMPLETED)', () => {

    const apiResponse: Book[] = [new Book('000', '', '')];

    nextState = booksReducer(initState, {
      type: BooksActions.LOAD_COMPLETED,
      payload: apiResponse
    });

    expect(nextState.isLoading).toBe(false);
    expect(nextState.books.length).toBe(1);
  });
});
