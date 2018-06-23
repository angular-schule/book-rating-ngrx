import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { Book } from './book';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class BookStoreService {

  private api = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/books`).pipe(
      map(books => books.map(book => this.responseToBook(book))),
      delay(1000)
    );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.api}/book/${isbn}`).pipe(
      map(book => this.responseToBook(book)),
      delay(1000)
    );
  }

  add(book: Book): Observable<any> {
    const newBook = {
      title: book.title,
      description: book.description,
      thumbnails: [{ url: book.thumbnail, title: 'Image' }],
      isbn: book.isbn,
      rating: book.rating
    }

    return this.http.post(`${this.api}/book`, newBook, { responseType: 'text' });
  }


  private responseToBook(res: any): Book {
    return {
      isbn: res.isbn,
      title: res.title,
      description: res.description,
      rating: res.rating,
      thumbnail: res.thumbnails && res.thumbnails[0].url
    }
  }
}
