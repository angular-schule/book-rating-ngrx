import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { State } from '../reducers';
import { Store, select } from '@ngrx/store';
import { LoadSingleBook } from '../actions/book.actions';
import { getSelectedBook } from '../reducers/book.selectors';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent implements OnInit {

  book$ = this.store.pipe(select(getSelectedBook));

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => this.store.dispatch(
        new LoadSingleBook(params.get('isbn'))
      )
    );
  }
}
