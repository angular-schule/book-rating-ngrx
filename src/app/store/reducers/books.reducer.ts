import { Book } from '../../shared/book';
import { BooksActions, BooksActionTypes } from '../actions/books.actions';

// TODO_1: implement BooksState

// TODO_2: define initial values
const initialState = {
};

export function booksReducer(state: BooksState = initialState, action: BooksActions): BooksState {
  switch (action.type) {

    // TODO_6: reducer for LoadBooks

    // TODO_11: reducer for LoadBooksSuccess

    // TODO later: reducer for LoadBooksFail

    default: { return state; }
  }
}
