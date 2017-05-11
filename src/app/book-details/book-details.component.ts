import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

import { BooksActions } from '../_actions/books.action';
import { Books } from '../_reducers/types';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @select() books$: Observable<Books>;
  book: Book;

  constructor(private route: ActivatedRoute, private booksActions: BooksActions) {}

  ngOnInit() {
    let isbn = this.route.snapshot.params['isbn'];
    this.booksActions.selectBook(isbn);
    this.books$.subscribe(books => this.book = books.selected);
  }
}
