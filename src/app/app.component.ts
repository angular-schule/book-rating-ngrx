import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as booksActions from './_actions/books.actions';
import * as reducers from './_reducers';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Rating';

  constructor(private store: Store<reducers.State>) {

    // triggers initial load of books
    // hint: there a lot of other ways to trigger this, too
    this.store.dispatch(new booksActions.LoadPending());
  }
}
