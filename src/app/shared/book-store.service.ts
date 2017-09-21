import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  private headers: Headers = new Headers();

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {

    return this.http
      .get<any[]>('https:/api.angular.schule/books')
      .map(rawBooks => rawBooks.map(
        rawBook => new Book(rawBook.isbn, rawBook.title, rawBook.description, rawBook.rating)
      ));
  }
}
