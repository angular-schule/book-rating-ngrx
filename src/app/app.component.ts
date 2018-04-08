import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from './store/reducers';
import { LoadBooks } from './store/actions/books.actions';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Rating';

  constructor(private store: Store<State>) {
  }
}
