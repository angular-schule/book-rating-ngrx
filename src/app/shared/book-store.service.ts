import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<any[]>(`${this.api}/books`).pipe(
      map(books => books.map(book => this.responseToBook(book)))
    );
  }

  // this is for demonstration purposes to trigger an HTTP error
  getAllBroken(): Observable<Book[]> {
    return this.http.get<any[]>(`${this.api}/BOOKSINVALID`);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<any>(`${this.api}/books/${isbn}`).pipe(
      map(book => this.responseToBook(book))
    );
  }

  create(book: Book): Observable<any> {
    const newBook = {
      title: book.title,
      description: book.description,
      thumbnails: [{ url: book.thumbnail, title: 'Cover Image' }],
      authors: book.authors,
      isbn: book.isbn,
      rating: book.rating
    };

    return this.http.post(`${this.api}/books`, newBook, { responseType: 'text' });
  }


  setRating(isbn: string, rating: number): Observable<any> {
    return this.http.post(`${this.api}/books/${isbn}/rate`, { rating }, { responseType: 'text' });
  }

  private responseToBook(res: any): Book {
    return {
      isbn: res.isbn,
      title: res.title,
      description: res.description,
      rating: res.rating,
      thumbnail: res.thumbnails && res.thumbnails[0].url,
      authors: res.authors
    };
  }
}
