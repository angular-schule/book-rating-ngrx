import { BookRatingReduxPage } from './app.po';

describe('book-rating-redux App', () => {
  let page: BookRatingReduxPage;

  beforeEach(() => {
    page = new BookRatingReduxPage();
  });

  it('should display message saying Book Rating', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Book Rating');
  });
});
