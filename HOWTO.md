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

## 4. Initial Effects Setup

<small>[docs](https://github.com/ngrx/platform/blob/master/docs/schematics/effect.md)</small>

Generate the root effects and register it within the `app.module.ts`

```sh
ng generate @ngrx/schematics:effect App --root --module app.module.ts
```


## 5. Create the reducer file

<small>[docs](https://github.com/ngrx/platform/blob/master/docs/schematics/reducer.md)</small>

Generate a `books` reducer file that contains a state interface,
an initial state object for the reducer, and a reducer function.

```sh
ng generate @ngrx/schematics:reducer Book
```

Please open `book.reducer.ts` and add define the interface `State`.

__--> TODO__

## 6. Create the actions file

<small>[docs](https://github.com/ngrx/platform/blob/master/docs/schematics/action.md)</small>


Generate a `books` actions file, that contains an enum of action types,
an example action class and an exported type union of action classes.

```sh
ng generate @ngrx/schematics:action Book
```

We already got our first action `BooksActionTypes.LoadBooks`. 
We should also add:

* `LoadBooksSuccess`
* `LoadBooksFail`

__--> TODO__


