import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html'
})
export class BookComponent {
  private minRating = 1;
  private maxRating = 5;

  @Input() book: Book;

  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();

  doRateUp() {
    this.rateUp.emit(this.book);
  }

  doRateDown() {
    this.rateDown.emit(this.book);
  }

  get rateUpDisabled() {
    return this.book.rating >= this.maxRating;
  }

  get rateDownDisabled() {
    return this.book.rating <= this.minRating;
  }
}
