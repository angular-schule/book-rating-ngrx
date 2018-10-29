import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
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

  constructor(private route: ActivatedRoute, private bs: BookStoreService, private store: Store<State>) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('isbn'))
    ).subscribe(isbn => this.store.dispatch(new LoadSingleBook(isbn)));
  }
}
