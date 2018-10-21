# Step by step -- Angular: Getting grips to state with NgRx and RxJS



## 1. Our project

We already created a project via Angular CLI 7.0.2.

<!--
```sh
ng new book-rating --routing --style=scss --prefix=br
```
-->

This simple application displays some books in a list and also has a default page with routing.
Right now this application has no Redux in place.
Let's change that! Please clone the application:

```sh
git clone https://github.com/angular-schule/book-rating-ngrx.git
cd book-rating-ngrx
npm i
```



## 2. Install @ngrx/schematics

We need to install the NgRx schematics

```sh
npm install @ngrx/schematics --save-dev
```

as well as the usual NgRx packages

```sh
npm install @ngrx/store @ngrx/effects @ngrx/store-devtools @ngrx/router-store --save
```

__Hint__

You can save some keystrokes and skip the `@ngrx/schematics:` prefix when the default collection is set to `@ngrx/schematics`.
For the sake of clarity, however, we leave it at the default settings.



## 3. Initial Store Setup 

<small>[docs](https://github.com/ngrx/platform/blob/master/docs/schematics/store.md)</small>

Generate the initial state management and register it within the `app.module.ts`

```sh
ng generate @ngrx/schematics:store State --root --module app.module.ts
```



## 4. Create the reducer file

<small>[docs](https://github.com/ngrx/platform/blob/master/docs/schematics/reducer.md)</small>

Generate a `books` reducer file that contains a state interface,
an initial state object for the reducer, and a reducer function.

```sh
ng generate @ngrx/schematics:reducer Book --group --reducers reducers/index.ts
```

We also group the reducer file within a `reducers` folder (`--group`)
and add it to a defined map of reducers (here: the root reducer which was created at the initial store setup).

__Please open `src/app/reducers/book.reducer.ts`__ and define the following interface `State`.

```ts
export interface BooksState {
  books: Book[];     // a list of books that is going to be loaded via HTTP
  loading: boolean;  // an indicator for the waiting time
}

const initialState: BooksState = {
  books: [],
  loading: false
};
```



## 5. Create the actions file

<small>[docs](https://github.com/ngrx/platform/blob/master/docs/schematics/action.md)</small>

Generate a `books` actions file, that contains an enum of action types,
an example action class and an exported type union of action classes.

```sh
ng generate @ngrx/schematics:action Book --group
```

Again we use `--group` to group the action file within an `actions` folder.


__Please open `src/app/actions/book.actions.ts`.__
We already got our first action `BooksActionTypes.LoadBooks`. 
We should also add:

* `LoadBooksSuccess`
* `LoadBooksFail`

The full file should look like this:

```ts
export enum BookActionTypes {
  LoadBooks =        '[Book] Load Books',
  LoadBooksSuccess = '[Book] Load Books success',
  LoadBooksFail =    '[Book] Load Books fail',
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

export type BookActions =
  | LoadBooks
  | LoadBooksSuccess
  | LoadBooksFail;
```


# 6. Dispatching our first action

We can already dispatch the `LoadBooks` action.
A good place for this 



# 6. Finalize the reducers file

It's time to wire the things togehter.
Please open `book.reducer.ts` again so that we can handle 

## X. Create the effects file

<small>[docs](https://github.com/ngrx/platform/blob/master/docs/schematics/effect.md)</small>

Generate a file for the effects and register it within the `app.module.ts`

```sh
ng generate @ngrx/schematics:effect Book --group --root --module app.module.ts
```

THe 
