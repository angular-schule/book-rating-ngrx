# Setup


## 1. Install project

We start a new project with the Angular CLI 7.0.2:

```
ng new book-rating --routing --style=scss --prefix=br
```


## 2. Install @ngrx/schematics

After that we install the NgRx schematics

```
npm install @ngrx/schematics --save-dev
```

as well as the usual NgRx packages

```
npm install @ngrx/store @ngrx/effects @ngrx/store-devtools @ngrx/router-store --save
```


## 3. Initial State Setup

Generate the initial state management and register it within the `app.module.ts`

```sh
ng generate @ngrx/schematics:store State --root --module app.module.ts --statePath store/reducers 
```

We create the folder `store` here, because we don't want to have our reduces at app-level.
The same folder structure is used in the official NgRx demo.

Unfortunately the schematics isn't perfect. We have to open `app.module.ts` and fix the import to the `environment.ts ` 

## 4. Initial Effects Setup

Generate the root effects and register it within the `app.module.ts`

```sh
ng generate @ngrx/schematics:effect App --root --module app.module.ts
```





