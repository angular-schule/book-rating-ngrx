import { Component, OnInit } from '@angular/core';

import { BookStoreService } from './../shared/book-store.service';
import { BookComponent } from './../book/book.component';
import { Book } from '../shared/book';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.bs.getAll().subscribe(books => this.books = books);
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  addBookToList(book: Book) {
    this.books.push(book);
  }
}
