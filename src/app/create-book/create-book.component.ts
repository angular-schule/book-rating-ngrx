import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Book } from '../shared/book';
import { BooksState } from '../store/reducers/books.reducer';
// import { AddBook } from '../store/actions/books.actions';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private store: Store<BooksState>) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl('')
    });
  }


  submitForm() {
    const value = this.bookForm.value;
    const book: Book = {
      isbn: value.isbn,
      title: value.title,
      description: value.description,
      thumbnail: 'http://api.angular.schule/avatar/0',
      rating: 1
    };

    // this.store.dispatch(new AddBook(book));
    this.resetForm();
  }

  resetForm() {
    this.bookForm.reset({
      isbn: '',
      title: '',
      description: ''
    });
  }

}
