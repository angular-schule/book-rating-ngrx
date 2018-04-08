import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {
  book: Book = { isbn: '', title: '', description: '', rating: 1 };

  @ViewChild(NgForm)
  bookForm: NgForm;

  @Output()
  bookCreate = new EventEmitter<Book>();

  add() {
    this.bookCreate.emit(this.book);
    this.book = { isbn: '', title: '', description: '', rating: 1 };
    this.bookForm.reset(this.book);
  }
}
