import {Book} from './book';

describe('Rating a book', () => {

  let book: Book;
  beforeEach(() => {
    book = new Book('', '', '');
  });

  it('should be possible to rate a book up', () => {
    book.rateUp();
    expect(book.rating).toBe(1);
  });

  it('should be possible to rate a book down', () => {
    book.rating = 2;
    book.rateDown();
    expect(book.rating).toBe(1);
  });

  it('should not be allowed to have a rating greater than 5', () => {
    book.rating = 5;
    book.rateUp();
    expect(book.rating).toBe(5);
  });

  it('should not be allowed to have a rating smaller than 0', () => {
    book.rateDown();
    expect(book.rating).toBe(0);
  });
});