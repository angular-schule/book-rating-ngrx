import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

import { BooksActions } from '../_actions/books.action';
import { BooksState } from '../_reducers/types';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent implements OnInit {

  @select() booksState$: Observable<BooksState>;
  book: Book;

  constructor(private route: ActivatedRoute, private booksActions: BooksActions) {}

  ngOnInit() {
    const isbn = this.route.snapshot.params.isbn;
    this.booksActions.selectBook(isbn);
    this.booksState$.subscribe(books => this.book = books.selected);
  }
}
