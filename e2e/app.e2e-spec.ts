import { BookRatingReduxPage } from './app.po';

describe('book-rating-redux App', () => {
  let page: BookRatingReduxPage;

  beforeEach(() => {
    page = new BookRatingReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
