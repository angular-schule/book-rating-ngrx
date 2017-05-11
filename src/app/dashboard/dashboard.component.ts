import { IAppState } from './../_reducers/types';
import { Observable } from 'rxjs/Observable';
import { BooksActions } from './../_actions/books.action';
import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';

import { BookStoreService } from './../shared/book-store.service';
import { BookComponent } from './../book/book.component';
import { Book } from '../shared/book';
import { Books } from '../_reducers/types';


@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  @select() books$: Observable<Books>;

  addBookToList(book: Book) {
    //this.books.push(book);
  }
}
