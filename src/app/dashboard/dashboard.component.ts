import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Book } from '../shared/book';
import { State } from '../store/reducers';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
    // TODO: Select from store
    // TODO: Dispatch initial book list loading action
  }

  addBookToList(book: Book) {
  }
}
