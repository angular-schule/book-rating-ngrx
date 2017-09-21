import { Component } from '@angular/core';
import { BooksActions } from './_actions/books.action';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Rating';

  constructor(booksActions: BooksActions) {
    booksActions.loadBooks();
  }
}
