#TODO_1
// books.reducer.ts
export interface BooksState {
  books: Book[];
  loading: boolean;
  selectedIsbn: string;
}


#TODO_2
// books.reducer.ts --> initialState

  books: [],
  loading: false,
  selectedIsbn: null
  
WICHTIG: 
initialState: BooksState


#TODO_3
// books.actions.ts --> BooksActionTypes

  LoadBooks = '[Books] Load all books',
  LoadBooksSuccess = '[Books] Load all books success',
  LoadBooksFail = '[Books] Load all books fail',
  
  
#TODO_4 (by hand)
// books.actions.ts
export class LoadBooks implements Action {
  readonly type = BooksActionTypes.LoadBooks;
}

export class LoadBooksSuccess implements Action {
  readonly type = BooksActionTypes.LoadBooksSuccess;
  constructor(public payload: Book[]) {}
}

export class LoadBooksFail implements Action {
  readonly type = BooksActionTypes.LoadBooksFail;
  constructor(public payload: any) {}
}

#TODO_5
// dashboard.component.ts
this.store.dispatch(new LoadBooks());


#TODO_6
// books.reducer.ts 
    case BooksActionTypes.LoadBooks: {
      return { ...state, loading: true };
    }
	
#TODO_7
// books.selectors.ts
export const getBooksLoading = createSelector(
  getBooksState,
  state => state.loading
);


#TODO_8
// books.selectors.ts
export const getAllBooks = createSelector(
  getBooksState,
  state => state.books
);


#TODO_9
// dashboard.component.ts
    this.loading$ = this.store.pipe(select(getBooksLoading));
	
	
#TODO_10 !! (by hand)
// books.effects.ts

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BooksActionTypes.LoadBooks),
    mergeMap(() => this.bs.getAll()),
    map(books => new booksActions.LoadBooksSuccess(books))
  );
  
  
#TODO_11
// books.reducers.ts
    case BooksActionTypes.LoadBooksSuccess: {
      const books = action.payload;

      return { ...state, books, loading: false };
    }

#TODO_12
// dashboard.component.ts
    this.books$ = this.store.pipe(
      select(getAllBooks)
    );


# OPTIONAL

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BooksActionTypes.LoadBooks),
    mergeMap(() => this.bs.getAll().pipe(
      map(books => new booksActions.LoadBooksSuccess(books)),
      catchError(err => of(new booksActions.LoadBooksFail(err)))
    ))
  );

    case BooksActionTypes.LoadBooksFail: {
      return { ...state, loading: false };
    }

