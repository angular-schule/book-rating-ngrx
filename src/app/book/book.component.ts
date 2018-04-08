import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: Book;
  @Output() rate = new EventEmitter<Book>();

  rateUp() {
    // TODO
    this.rate.emit(this.book);
  }

  rateDown() {
    // TODO
    this.rate.emit(this.book);
  }
}
